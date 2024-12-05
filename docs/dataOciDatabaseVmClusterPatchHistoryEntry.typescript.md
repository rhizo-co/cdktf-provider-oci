# `dataOciDatabaseVmClusterPatchHistoryEntry` Submodule <a name="`dataOciDatabaseVmClusterPatchHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntry <a name="DataOciDatabaseVmClusterPatchHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry oci_database_vm_cluster_patch_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterPatchHistoryEntry } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry(scope: Construct, id: string, config: DataOciDatabaseVmClusterPatchHistoryEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig">DataOciDatabaseVmClusterPatchHistoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig">DataOciDatabaseVmClusterPatchHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isConstruct"></a>

```typescript
import { dataOciDatabaseVmClusterPatchHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformElement"></a>

```typescript
import { dataOciDatabaseVmClusterPatchHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseVmClusterPatchHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseVmClusterPatchHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseVmClusterPatchHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseVmClusterPatchHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterPatchHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryIdInput">patchHistoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterIdInput">vmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryId">patchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterId">vmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `patchHistoryEntryIdInput`<sup>Optional</sup> <a name="patchHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryIdInput"></a>

```typescript
public readonly patchHistoryEntryIdInput: string;
```

- *Type:* string

---

##### `vmClusterIdInput`<sup>Optional</sup> <a name="vmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterIdInput"></a>

```typescript
public readonly vmClusterIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `patchHistoryEntryId`<sup>Required</sup> <a name="patchHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryId"></a>

```typescript
public readonly patchHistoryEntryId: string;
```

- *Type:* string

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterId"></a>

```typescript
public readonly vmClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntryConfig <a name="DataOciDatabaseVmClusterPatchHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.Initializer"></a>

```typescript
import { dataOciDatabaseVmClusterPatchHistoryEntry } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseVmClusterPatchHistoryEntryConfig: dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.patchHistoryEntryId">patchHistoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#patch_history_entry_id DataOciDatabaseVmClusterPatchHistoryEntry#patch_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.vmClusterId">vmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntry#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#id DataOciDatabaseVmClusterPatchHistoryEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `patchHistoryEntryId`<sup>Required</sup> <a name="patchHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.patchHistoryEntryId"></a>

```typescript
public readonly patchHistoryEntryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#patch_history_entry_id DataOciDatabaseVmClusterPatchHistoryEntry#patch_history_entry_id}.

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.vmClusterId"></a>

```typescript
public readonly vmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntry#vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#id DataOciDatabaseVmClusterPatchHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



