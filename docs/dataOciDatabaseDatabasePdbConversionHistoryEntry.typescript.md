# `dataOciDatabaseDatabasePdbConversionHistoryEntry` Submodule <a name="`dataOciDatabaseDatabasePdbConversionHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntry <a name="DataOciDatabaseDatabasePdbConversionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry oci_database_database_pdb_conversion_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer"></a>

```typescript
import { dataOciDatabaseDatabasePdbConversionHistoryEntry } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry(scope: Construct, id: string, config: DataOciDatabaseDatabasePdbConversionHistoryEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig">DataOciDatabaseDatabasePdbConversionHistoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig">DataOciDatabaseDatabasePdbConversionHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isConstruct"></a>

```typescript
import { dataOciDatabaseDatabasePdbConversionHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformElement"></a>

```typescript
import { dataOciDatabaseDatabasePdbConversionHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseDatabasePdbConversionHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseDatabasePdbConversionHistoryEntry } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseDatabasePdbConversionHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseDatabasePdbConversionHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabasePdbConversionHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.additionalCdbParams">additionalCdbParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdbName">cdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.targetDatabaseId">targetDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryIdInput">pdbConversionHistoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryId">pdbConversionHistoryEntryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `additionalCdbParams`<sup>Required</sup> <a name="additionalCdbParams" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.additionalCdbParams"></a>

```typescript
public readonly additionalCdbParams: string;
```

- *Type:* string

---

##### `cdbName`<sup>Required</sup> <a name="cdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.cdbName"></a>

```typescript
public readonly cdbName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.sourceDatabaseId"></a>

```typescript
public readonly sourceDatabaseId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.targetDatabaseId"></a>

```typescript
public readonly targetDatabaseId: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pdbConversionHistoryEntryIdInput`<sup>Optional</sup> <a name="pdbConversionHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryIdInput"></a>

```typescript
public readonly pdbConversionHistoryEntryIdInput: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pdbConversionHistoryEntryId`<sup>Required</sup> <a name="pdbConversionHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.pdbConversionHistoryEntryId"></a>

```typescript
public readonly pdbConversionHistoryEntryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntryConfig <a name="DataOciDatabaseDatabasePdbConversionHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.Initializer"></a>

```typescript
import { dataOciDatabaseDatabasePdbConversionHistoryEntry } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseDatabasePdbConversionHistoryEntryConfig: dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#database_id DataOciDatabaseDatabasePdbConversionHistoryEntry#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.pdbConversionHistoryEntryId">pdbConversionHistoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#pdb_conversion_history_entry_id DataOciDatabaseDatabasePdbConversionHistoryEntry#pdb_conversion_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#id DataOciDatabaseDatabasePdbConversionHistoryEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#database_id DataOciDatabaseDatabasePdbConversionHistoryEntry#database_id}.

---

##### `pdbConversionHistoryEntryId`<sup>Required</sup> <a name="pdbConversionHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.pdbConversionHistoryEntryId"></a>

```typescript
public readonly pdbConversionHistoryEntryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#pdb_conversion_history_entry_id DataOciDatabaseDatabasePdbConversionHistoryEntry#pdb_conversion_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntry.DataOciDatabaseDatabasePdbConversionHistoryEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entry#id DataOciDatabaseDatabasePdbConversionHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



