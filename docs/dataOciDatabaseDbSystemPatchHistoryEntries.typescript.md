# `dataOciDatabaseDbSystemPatchHistoryEntries` Submodule <a name="`dataOciDatabaseDbSystemPatchHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemPatchHistoryEntries <a name="DataOciDatabaseDbSystemPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries oci_database_db_system_patch_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries(scope: Construct, id: string, config: DataOciDatabaseDbSystemPatchHistoryEntriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig">DataOciDatabaseDbSystemPatchHistoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig">DataOciDatabaseDbSystemPatchHistoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseDbSystemPatchHistoryEntriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemPatchHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isConstruct"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemPatchHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbSystemPatchHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbSystemPatchHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemPatchHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList">DataOciDatabaseDbSystemPatchHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.patchHistoryEntries">patchHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseDbSystemPatchHistoryEntriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList">DataOciDatabaseDbSystemPatchHistoryEntriesFilterList</a>

---

##### `patchHistoryEntries`<sup>Required</sup> <a name="patchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.patchHistoryEntries"></a>

```typescript
public readonly patchHistoryEntries: DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList</a>

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseDbSystemPatchHistoryEntriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemPatchHistoryEntriesConfig <a name="DataOciDatabaseDbSystemPatchHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemPatchHistoryEntriesConfig: dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#db_system_id DataOciDatabaseDbSystemPatchHistoryEntries#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#id DataOciDatabaseDbSystemPatchHistoryEntries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#db_system_id DataOciDatabaseDbSystemPatchHistoryEntries#db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseDbSystemPatchHistoryEntriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#filter DataOciDatabaseDbSystemPatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#id DataOciDatabaseDbSystemPatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbSystemPatchHistoryEntriesFilter <a name="DataOciDatabaseDbSystemPatchHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemPatchHistoryEntriesFilter: dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#name DataOciDatabaseDbSystemPatchHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#values DataOciDatabaseDbSystemPatchHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#regex DataOciDatabaseDbSystemPatchHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#name DataOciDatabaseDbSystemPatchHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#values DataOciDatabaseDbSystemPatchHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#regex DataOciDatabaseDbSystemPatchHistoryEntries#regex}.

---

### DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries <a name="DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries: dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemPatchHistoryEntriesFilterList <a name="DataOciDatabaseDbSystemPatchHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbSystemPatchHistoryEntriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>[]

---


### DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbSystemPatchHistoryEntriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter">DataOciDatabaseDbSystemPatchHistoryEntriesFilter</a>

---


### DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList <a name="DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference <a name="DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbSystemPatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries</a>

---



