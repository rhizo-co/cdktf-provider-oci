# `dataOciDatabaseAutonomousDatabaseBackups` Submodule <a name="`dataOciDatabaseAutonomousDatabaseBackups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseBackups <a name="DataOciDatabaseAutonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups oci_database_autonomous_database_backups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups(scope: Construct, id: string, config?: DataOciDatabaseAutonomousDatabaseBackupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig">DataOciDatabaseAutonomousDatabaseBackupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig">DataOciDatabaseAutonomousDatabaseBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetAutonomousDatabaseId">resetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseAutonomousDatabaseBackupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>[]

---

##### `resetAutonomousDatabaseId` <a name="resetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetAutonomousDatabaseId"></a>

```typescript
public resetAutonomousDatabaseId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetState"></a>

```typescript
public resetState(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseAutonomousDatabaseBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseBackups">autonomousDatabaseBackups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList">DataOciDatabaseAutonomousDatabaseBackupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomousDatabaseBackups`<sup>Required</sup> <a name="autonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseBackups"></a>

```typescript
public readonly autonomousDatabaseBackups: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseAutonomousDatabaseBackupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList">DataOciDatabaseAutonomousDatabaseBackupsFilterList</a>

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseAutonomousDatabaseBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups: dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups = { ... }
```


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails: dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails = { ... }
```


### DataOciDatabaseAutonomousDatabaseBackupsConfig <a name="DataOciDatabaseAutonomousDatabaseBackupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseBackupsConfig: dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseId`<sup>Optional</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#autonomous_database_id DataOciDatabaseAutonomousDatabaseBackups#autonomous_database_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#compartment_id DataOciDatabaseAutonomousDatabaseBackups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#display_name DataOciDatabaseAutonomousDatabaseBackups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseAutonomousDatabaseBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#filter DataOciDatabaseAutonomousDatabaseBackups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#id DataOciDatabaseAutonomousDatabaseBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#state DataOciDatabaseAutonomousDatabaseBackups#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#type DataOciDatabaseAutonomousDatabaseBackups#type}.

---

### DataOciDatabaseAutonomousDatabaseBackupsFilter <a name="DataOciDatabaseAutonomousDatabaseBackupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseAutonomousDatabaseBackupsFilter: dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#name DataOciDatabaseAutonomousDatabaseBackups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#values DataOciDatabaseAutonomousDatabaseBackups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#regex DataOciDatabaseAutonomousDatabaseBackups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#name DataOciDatabaseAutonomousDatabaseBackups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#values DataOciDatabaseAutonomousDatabaseBackups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_backups#regex DataOciDatabaseAutonomousDatabaseBackups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internetProxy">internetProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcPassword">vpcPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcUser">vpcUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetProxy`<sup>Required</sup> <a name="internetProxy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```typescript
public readonly internetProxy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcPassword`<sup>Required</sup> <a name="vpcPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```typescript
public readonly vpcPassword: string;
```

- *Type:* string

---

##### `vpcUser`<sup>Required</sup> <a name="vpcUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```typescript
public readonly vpcUser: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetails</a>

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseSizeInTbs">databaseSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isAutomatic">isAutomatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isLongTermBackup">isLongTermBackup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isRestorable">isRestorable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.sizeInTbs">sizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTill">timeAvailableTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsBackupDestinationDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseSizeInTbs`<sup>Required</sup> <a name="databaseSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseSizeInTbs"></a>

```typescript
public readonly databaseSizeInTbs: number;
```

- *Type:* number

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutomatic`<sup>Required</sup> <a name="isAutomatic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isAutomatic"></a>

```typescript
public readonly isAutomatic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLongTermBackup`<sup>Required</sup> <a name="isLongTermBackup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isLongTermBackup"></a>

```typescript
public readonly isLongTermBackup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRestorable`<sup>Required</sup> <a name="isRestorable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.isRestorable"></a>

```typescript
public readonly isRestorable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.keyStoreWalletName"></a>

```typescript
public readonly keyStoreWalletName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `sizeInTbs`<sup>Required</sup> <a name="sizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.sizeInTbs"></a>

```typescript
public readonly sizeInTbs: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAvailableTill`<sup>Required</sup> <a name="timeAvailableTill" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTill"></a>

```typescript
public readonly timeAvailableTill: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups</a>

---


### DataOciDatabaseAutonomousDatabaseBackupsFilterList <a name="DataOciDatabaseAutonomousDatabaseBackupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDatabaseBackupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>[]

---


### DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseAutonomousDatabaseBackups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseAutonomousDatabaseBackupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseBackups.DataOciDatabaseAutonomousDatabaseBackupsFilter">DataOciDatabaseAutonomousDatabaseBackupsFilter</a>

---



