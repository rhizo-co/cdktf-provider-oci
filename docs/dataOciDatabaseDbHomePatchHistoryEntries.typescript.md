# `dataOciDatabaseDbHomePatchHistoryEntries` Submodule <a name="`dataOciDatabaseDbHomePatchHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbHomePatchHistoryEntries <a name="DataOciDatabaseDbHomePatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries oci_database_db_home_patch_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries(scope: Construct, id: string, config: DataOciDatabaseDbHomePatchHistoryEntriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig">DataOciDatabaseDbHomePatchHistoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig">DataOciDatabaseDbHomePatchHistoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseDbHomePatchHistoryEntriesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbHomePatchHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isConstruct"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDbHomePatchHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDbHomePatchHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDbHomePatchHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbHomePatchHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList">DataOciDatabaseDbHomePatchHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.patchHistoryEntries">patchHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeIdInput">dbHomeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeId">dbHomeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseDbHomePatchHistoryEntriesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList">DataOciDatabaseDbHomePatchHistoryEntriesFilterList</a>

---

##### `patchHistoryEntries`<sup>Required</sup> <a name="patchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.patchHistoryEntries"></a>

```typescript
public readonly patchHistoryEntries: DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList</a>

---

##### `dbHomeIdInput`<sup>Optional</sup> <a name="dbHomeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeIdInput"></a>

```typescript
public readonly dbHomeIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseDbHomePatchHistoryEntriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `dbHomeId`<sup>Required</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.dbHomeId"></a>

```typescript
public readonly dbHomeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntries.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbHomePatchHistoryEntriesConfig <a name="DataOciDatabaseDbHomePatchHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbHomePatchHistoryEntriesConfig: dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dbHomeId">dbHomeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#db_home_id DataOciDatabaseDbHomePatchHistoryEntries#db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#id DataOciDatabaseDbHomePatchHistoryEntries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbHomeId`<sup>Required</sup> <a name="dbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.dbHomeId"></a>

```typescript
public readonly dbHomeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#db_home_id DataOciDatabaseDbHomePatchHistoryEntries#db_home_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseDbHomePatchHistoryEntriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#filter DataOciDatabaseDbHomePatchHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#id DataOciDatabaseDbHomePatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbHomePatchHistoryEntriesFilter <a name="DataOciDatabaseDbHomePatchHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbHomePatchHistoryEntriesFilter: dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#name DataOciDatabaseDbHomePatchHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#values DataOciDatabaseDbHomePatchHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#regex DataOciDatabaseDbHomePatchHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#name DataOciDatabaseDbHomePatchHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#values DataOciDatabaseDbHomePatchHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_home_patch_history_entries#regex DataOciDatabaseDbHomePatchHistoryEntries#regex}.

---

### DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries <a name="DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries: dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbHomePatchHistoryEntriesFilterList <a name="DataOciDatabaseDbHomePatchHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbHomePatchHistoryEntriesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>[]

---


### DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseDbHomePatchHistoryEntriesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesFilter">DataOciDatabaseDbHomePatchHistoryEntriesFilter</a>

---


### DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList <a name="DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.get"></a>

```typescript
public get(index: number): DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference <a name="DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseDbHomePatchHistoryEntries } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbHomePatchHistoryEntries.DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries</a>

---



