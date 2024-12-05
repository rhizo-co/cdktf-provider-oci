# `dataOciMysqlMysqlBackups` Submodule <a name="`dataOciMysqlMysqlBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlBackups <a name="DataOciMysqlMysqlBackups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups oci_mysql_mysql_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups(scope: Construct, id: string, config: DataOciMysqlMysqlBackupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig">DataOciMysqlMysqlBackupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig">DataOciMysqlMysqlBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetCreationType">resetCreationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMysqlMysqlBackupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>[]

---

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetCreationType` <a name="resetCreationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetCreationType"></a>

```typescript
public resetCreationType(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlBackups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMysqlMysqlBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlMysqlBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlMysqlBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backups">backups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList">DataOciMysqlMysqlBackupsBackupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList">DataOciMysqlMysqlBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationTypeInput">creationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `backups`<sup>Required</sup> <a name="backups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backups"></a>

```typescript
public readonly backups: DataOciMysqlMysqlBackupsBackupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList">DataOciMysqlMysqlBackupsBackupsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filter"></a>

```typescript
public readonly filter: DataOciMysqlMysqlBackupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList">DataOciMysqlMysqlBackupsFilterList</a>

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `creationTypeInput`<sup>Optional</sup> <a name="creationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationTypeInput"></a>

```typescript
public readonly creationTypeInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMysqlMysqlBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlBackupsBackups <a name="DataOciMysqlMysqlBackupsBackups" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackups: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshot: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections = { ... }
```


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary = { ... }
```


### DataOciMysqlMysqlBackupsBackupsSourceDetails <a name="DataOciMysqlMysqlBackupsBackupsSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsBackupsSourceDetails: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails = { ... }
```


### DataOciMysqlMysqlBackupsConfig <a name="DataOciMysqlMysqlBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsConfig: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.creationType">creationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#compartment_id DataOciMysqlMysqlBackups#compartment_id}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#backup_id DataOciMysqlMysqlBackups#backup_id}.

---

##### `creationType`<sup>Optional</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#creation_type DataOciMysqlMysqlBackups#creation_type}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#db_system_id DataOciMysqlMysqlBackups#db_system_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#display_name DataOciMysqlMysqlBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMysqlMysqlBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#filter DataOciMysqlMysqlBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#id DataOciMysqlMysqlBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#state DataOciMysqlMysqlBackups#state}.

---

### DataOciMysqlMysqlBackupsFilter <a name="DataOciMysqlMysqlBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlBackupsFilter: dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#name DataOciMysqlMysqlBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#values DataOciMysqlMysqlBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#regex DataOciMysqlMysqlBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#name DataOciMysqlMysqlBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#values DataOciMysqlMysqlBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_backups#regex DataOciMysqlMysqlBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pitrPolicy`<sup>Required</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy"></a>

```typescript
public readonly pitrPolicy: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList</a>

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocatedStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs">dataStorageSizeLimitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedStorageSizeInGbs`<sup>Required</sup> <a name="allocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```typescript
public readonly allocatedStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeLimitInGbs`<sup>Required</sup> <a name="dataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```typescript
public readonly dataStorageSizeLimitInGbs: number;
```

- *Type:* number

---

##### `isAutoExpandStorageEnabled`<sup>Required</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```typescript
public readonly isAutoExpandStorageEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxStorageSizeInGbs`<sup>Required</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```typescript
public readonly maxStorageSizeInGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorage</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup">finalBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticBackupRetention`<sup>Required</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```typescript
public readonly automaticBackupRetention: string;
```

- *Type:* string

---

##### `finalBackup`<sup>Required</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup"></a>

```typescript
public readonly finalBackup: string;
```

- *Type:* string

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```typescript
public readonly isDeleteProtected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicy</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.modes">modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpoints</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenance</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.crashRecovery">crashRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.databaseManagement">databaseManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotBackupPolicyList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `crashRecovery`<sup>Required</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.crashRecovery"></a>

```typescript
public readonly crashRecovery: string;
```

- *Type:* string

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.databaseManagement"></a>

```typescript
public readonly databaseManagement: string;
```

- *Type:* string

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorage"></a>

```typescript
public readonly dataStorage: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDataStorageList</a>

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotDeletionPolicyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotEndpointsList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.maintenance"></a>

```typescript
public readonly maintenance: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotMaintenanceList</a>

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.secureConnections"></a>

```typescript
public readonly secureConnections: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshot</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSecureConnections</a>

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference <a name="DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummary</a>

---


### DataOciMysqlMysqlBackupsBackupsList <a name="DataOciMysqlMysqlBackupsBackupsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupSizeInGbs">backupSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationType">creationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshot">dbSystemSnapshot</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshotSummary">dbSystemSnapshotSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.immediateSourceBackupId">immediateSourceBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.originalSourceBackupId">originalSourceBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList">DataOciMysqlMysqlBackupsBackupsSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCopyCreated">timeCopyCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups">DataOciMysqlMysqlBackupsBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupSizeInGbs`<sup>Required</sup> <a name="backupSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupSizeInGbs"></a>

```typescript
public readonly backupSizeInGbs: number;
```

- *Type:* number

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.creationType"></a>

```typescript
public readonly creationType: string;
```

- *Type:* string

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `dbSystemSnapshot`<sup>Required</sup> <a name="dbSystemSnapshot" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshot"></a>

```typescript
public readonly dbSystemSnapshot: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotList</a>

---

##### `dbSystemSnapshotSummary`<sup>Required</sup> <a name="dbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.dbSystemSnapshotSummary"></a>

```typescript
public readonly dbSystemSnapshotSummary: DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList">DataOciMysqlMysqlBackupsBackupsDbSystemSnapshotSummaryList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `immediateSourceBackupId`<sup>Required</sup> <a name="immediateSourceBackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.immediateSourceBackupId"></a>

```typescript
public readonly immediateSourceBackupId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `originalSourceBackupId`<sup>Required</sup> <a name="originalSourceBackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.originalSourceBackupId"></a>

```typescript
public readonly originalSourceBackupId: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.sourceDetails"></a>

```typescript
public readonly sourceDetails: DataOciMysqlMysqlBackupsBackupsSourceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList">DataOciMysqlMysqlBackupsBackupsSourceDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCopyCreated`<sup>Required</sup> <a name="timeCopyCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCopyCreated"></a>

```typescript
public readonly timeCopyCreated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackups">DataOciMysqlMysqlBackupsBackups</a>

---


### DataOciMysqlMysqlBackupsBackupsSourceDetailsList <a name="DataOciMysqlMysqlBackupsBackupsSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference <a name="DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails">DataOciMysqlMysqlBackupsBackupsSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlBackupsBackupsSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsBackupsSourceDetails">DataOciMysqlMysqlBackupsBackupsSourceDetails</a>

---


### DataOciMysqlMysqlBackupsFilterList <a name="DataOciMysqlMysqlBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlBackupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlMysqlBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>[]

---


### DataOciMysqlMysqlBackupsFilterOutputReference <a name="DataOciMysqlMysqlBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlMysqlBackupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlBackups.DataOciMysqlMysqlBackupsFilter">DataOciMysqlMysqlBackupsFilter</a>

---



