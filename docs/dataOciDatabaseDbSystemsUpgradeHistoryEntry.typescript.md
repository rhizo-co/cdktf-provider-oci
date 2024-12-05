# `dataOciDatabaseDbSystemsUpgradeHistoryEntry` Submodule <a name="`dataOciDatabaseDbSystemsUpgradeHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntry <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry oci_database_db_systems_upgrade_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemsUpgradeHistoryEntry } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry(scope: Construct, id: string, config: DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig">DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig">DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isConstruct"></a>

```typescript
import { dataOciDatabaseDbSystemsUpgradeHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDbSystemsUpgradeHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDbSystemsUpgradeHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDbSystemsUpgradeHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbSystemsUpgradeHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbSystemsUpgradeHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemsUpgradeHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newGiVersion">newGiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newOsVersion">newOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldGiVersion">oldGiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldOsVersion">oldOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput">upgradeHistoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryId">upgradeHistoryEntryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `newGiVersion`<sup>Required</sup> <a name="newGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newGiVersion"></a>

```typescript
public readonly newGiVersion: string;
```

- *Type:* string

---

##### `newOsVersion`<sup>Required</sup> <a name="newOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.newOsVersion"></a>

```typescript
public readonly newOsVersion: string;
```

- *Type:* string

---

##### `oldGiVersion`<sup>Required</sup> <a name="oldGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldGiVersion"></a>

```typescript
public readonly oldGiVersion: string;
```

- *Type:* string

---

##### `oldOsVersion`<sup>Required</sup> <a name="oldOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.oldOsVersion"></a>

```typescript
public readonly oldOsVersion: string;
```

- *Type:* string

---

##### `snapshotRetentionPeriodInDays`<sup>Required</sup> <a name="snapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `upgradeHistoryEntryIdInput`<sup>Optional</sup> <a name="upgradeHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput"></a>

```typescript
public readonly upgradeHistoryEntryIdInput: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `upgradeHistoryEntryId`<sup>Required</sup> <a name="upgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.upgradeHistoryEntryId"></a>

```typescript
public readonly upgradeHistoryEntryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemsUpgradeHistoryEntry } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemsUpgradeHistoryEntryConfig: dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId">upgradeHistoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#upgrade_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#id DataOciDatabaseDbSystemsUpgradeHistoryEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#db_system_id}.

---

##### `upgradeHistoryEntryId`<sup>Required</sup> <a name="upgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId"></a>

```typescript
public readonly upgradeHistoryEntryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDbSystemsUpgradeHistoryEntry#upgrade_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntry.DataOciDatabaseDbSystemsUpgradeHistoryEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entry#id DataOciDatabaseDbSystemsUpgradeHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



