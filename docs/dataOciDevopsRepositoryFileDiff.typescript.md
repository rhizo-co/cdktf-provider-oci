# `dataOciDevopsRepositoryFileDiff` Submodule <a name="`dataOciDevopsRepositoryFileDiff` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryFileDiff <a name="DataOciDevopsRepositoryFileDiff" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff oci_devops_repository_file_diff}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff(scope: Construct, id: string, config: DataOciDevopsRepositoryFileDiffConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig">DataOciDevopsRepositoryFileDiffConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig">DataOciDevopsRepositoryFileDiffConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.resetIsComparisonFromMergeBase">resetIsComparisonFromMergeBase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsComparisonFromMergeBase` <a name="resetIsComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.resetIsComparisonFromMergeBase"></a>

```typescript
public resetIsComparisonFromMergeBase(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryFileDiff resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isConstruct"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformElement"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.generateConfigForImport"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryFileDiff resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsRepositoryFileDiff to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsRepositoryFileDiff that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryFileDiff to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.areConflictsInFile">areConflictsInFile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.changes">changes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList">DataOciDevopsRepositoryFileDiffChangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isBinary">isBinary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isLarge">isLarge</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.newId">newId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.newPath">newPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.oldId">oldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.oldPath">oldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.baseVersionInput">baseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isComparisonFromMergeBaseInput">isComparisonFromMergeBaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.baseVersion">baseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `areConflictsInFile`<sup>Required</sup> <a name="areConflictsInFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.areConflictsInFile"></a>

```typescript
public readonly areConflictsInFile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `changes`<sup>Required</sup> <a name="changes" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.changes"></a>

```typescript
public readonly changes: DataOciDevopsRepositoryFileDiffChangesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList">DataOciDevopsRepositoryFileDiffChangesList</a>

---

##### `isBinary`<sup>Required</sup> <a name="isBinary" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isBinary"></a>

```typescript
public readonly isBinary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLarge`<sup>Required</sup> <a name="isLarge" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isLarge"></a>

```typescript
public readonly isLarge: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `newId`<sup>Required</sup> <a name="newId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.newId"></a>

```typescript
public readonly newId: string;
```

- *Type:* string

---

##### `newPath`<sup>Required</sup> <a name="newPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.newPath"></a>

```typescript
public readonly newPath: string;
```

- *Type:* string

---

##### `oldId`<sup>Required</sup> <a name="oldId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.oldId"></a>

```typescript
public readonly oldId: string;
```

- *Type:* string

---

##### `oldPath`<sup>Required</sup> <a name="oldPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.oldPath"></a>

```typescript
public readonly oldPath: string;
```

- *Type:* string

---

##### `baseVersionInput`<sup>Optional</sup> <a name="baseVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.baseVersionInput"></a>

```typescript
public readonly baseVersionInput: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isComparisonFromMergeBaseInput`<sup>Optional</sup> <a name="isComparisonFromMergeBaseInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isComparisonFromMergeBaseInput"></a>

```typescript
public readonly isComparisonFromMergeBaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.baseVersion"></a>

```typescript
public readonly baseVersion: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isComparisonFromMergeBase`<sup>Required</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.isComparisonFromMergeBase"></a>

```typescript
public readonly isComparisonFromMergeBase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiff.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryFileDiffChanges <a name="DataOciDevopsRepositoryFileDiffChanges" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChanges.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryFileDiffChanges: dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChanges = { ... }
```


### DataOciDevopsRepositoryFileDiffChangesDiffSections <a name="DataOciDevopsRepositoryFileDiffChangesDiffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSections.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryFileDiffChangesDiffSections: dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSections = { ... }
```


### DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines <a name="DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryFileDiffChangesDiffSectionsLines: dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines = { ... }
```


### DataOciDevopsRepositoryFileDiffConfig <a name="DataOciDevopsRepositoryFileDiffConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryFileDiffConfig: dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.baseVersion">baseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#base_version DataOciDevopsRepositoryFileDiff#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.filePath">filePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#file_path DataOciDevopsRepositoryFileDiff#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#repository_id DataOciDevopsRepositoryFileDiff#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#target_version DataOciDevopsRepositoryFileDiff#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#id DataOciDevopsRepositoryFileDiff#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#is_comparison_from_merge_base DataOciDevopsRepositoryFileDiff#is_comparison_from_merge_base}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.baseVersion"></a>

```typescript
public readonly baseVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#base_version DataOciDevopsRepositoryFileDiff#base_version}.

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#file_path DataOciDevopsRepositoryFileDiff#file_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#repository_id DataOciDevopsRepositoryFileDiff#repository_id}.

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#target_version DataOciDevopsRepositoryFileDiff#target_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#id DataOciDevopsRepositoryFileDiff#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isComparisonFromMergeBase`<sup>Optional</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffConfig.property.isComparisonFromMergeBase"></a>

```typescript
public readonly isComparisonFromMergeBase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_file_diff#is_comparison_from_merge_base DataOciDevopsRepositoryFileDiff#is_comparison_from_merge_base}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList <a name="DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference <a name="DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.baseLine">baseLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.conflictMarker">conflictMarker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.lineContent">lineContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.targetLine">targetLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines">DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.baseLine"></a>

```typescript
public readonly baseLine: number;
```

- *Type:* number

---

##### `conflictMarker`<sup>Required</sup> <a name="conflictMarker" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.conflictMarker"></a>

```typescript
public readonly conflictMarker: string;
```

- *Type:* string

---

##### `lineContent`<sup>Required</sup> <a name="lineContent" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.lineContent"></a>

```typescript
public readonly lineContent: string;
```

- *Type:* string

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.targetLine"></a>

```typescript
public readonly targetLine: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines">DataOciDevopsRepositoryFileDiffChangesDiffSectionsLines</a>

---


### DataOciDevopsRepositoryFileDiffChangesDiffSectionsList <a name="DataOciDevopsRepositoryFileDiffChangesDiffSectionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference <a name="DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList">DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSections">DataOciDevopsRepositoryFileDiffChangesDiffSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.lines"></a>

```typescript
public readonly lines: DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList">DataOciDevopsRepositoryFileDiffChangesDiffSectionsLinesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryFileDiffChangesDiffSections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSections">DataOciDevopsRepositoryFileDiffChangesDiffSections</a>

---


### DataOciDevopsRepositoryFileDiffChangesList <a name="DataOciDevopsRepositoryFileDiffChangesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryFileDiffChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryFileDiffChangesOutputReference <a name="DataOciDevopsRepositoryFileDiffChangesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryFileDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.baseLine">baseLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.baseSpan">baseSpan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.diffSections">diffSections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList">DataOciDevopsRepositoryFileDiffChangesDiffSectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.targetLine">targetLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.targetSpan">targetSpan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChanges">DataOciDevopsRepositoryFileDiffChanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.baseLine"></a>

```typescript
public readonly baseLine: number;
```

- *Type:* number

---

##### `baseSpan`<sup>Required</sup> <a name="baseSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.baseSpan"></a>

```typescript
public readonly baseSpan: number;
```

- *Type:* number

---

##### `diffSections`<sup>Required</sup> <a name="diffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.diffSections"></a>

```typescript
public readonly diffSections: DataOciDevopsRepositoryFileDiffChangesDiffSectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesDiffSectionsList">DataOciDevopsRepositoryFileDiffChangesDiffSectionsList</a>

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.targetLine"></a>

```typescript
public readonly targetLine: number;
```

- *Type:* number

---

##### `targetSpan`<sup>Required</sup> <a name="targetSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.targetSpan"></a>

```typescript
public readonly targetSpan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryFileDiffChanges;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryFileDiff.DataOciDevopsRepositoryFileDiffChanges">DataOciDevopsRepositoryFileDiffChanges</a>

---



