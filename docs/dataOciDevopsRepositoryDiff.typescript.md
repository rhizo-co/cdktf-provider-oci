# `dataOciDevopsRepositoryDiff` Submodule <a name="`dataOciDevopsRepositoryDiff` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryDiff <a name="DataOciDevopsRepositoryDiff" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff oci_devops_repository_diff}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff(scope: Construct, id: string, config: DataOciDevopsRepositoryDiffConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig">DataOciDevopsRepositoryDiffConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig">DataOciDevopsRepositoryDiffConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetIsComparisonFromMergeBase">resetIsComparisonFromMergeBase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsComparisonFromMergeBase` <a name="resetIsComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.resetIsComparisonFromMergeBase"></a>

```typescript
public resetIsComparisonFromMergeBase(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryDiff resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isConstruct"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformElement"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryDiff resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsRepositoryDiff to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsRepositoryDiff that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryDiff to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.areConflictsInFile">areConflictsInFile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.changes">changes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList">DataOciDevopsRepositoryDiffChangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isBinary">isBinary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isLarge">isLarge</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newId">newId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newPath">newPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldId">oldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldPath">oldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersionInput">baseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBaseInput">isComparisonFromMergeBaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersion">baseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `areConflictsInFile`<sup>Required</sup> <a name="areConflictsInFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.areConflictsInFile"></a>

```typescript
public readonly areConflictsInFile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `changes`<sup>Required</sup> <a name="changes" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.changes"></a>

```typescript
public readonly changes: DataOciDevopsRepositoryDiffChangesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList">DataOciDevopsRepositoryDiffChangesList</a>

---

##### `isBinary`<sup>Required</sup> <a name="isBinary" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isBinary"></a>

```typescript
public readonly isBinary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLarge`<sup>Required</sup> <a name="isLarge" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isLarge"></a>

```typescript
public readonly isLarge: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `newId`<sup>Required</sup> <a name="newId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newId"></a>

```typescript
public readonly newId: string;
```

- *Type:* string

---

##### `newPath`<sup>Required</sup> <a name="newPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.newPath"></a>

```typescript
public readonly newPath: string;
```

- *Type:* string

---

##### `oldId`<sup>Required</sup> <a name="oldId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldId"></a>

```typescript
public readonly oldId: string;
```

- *Type:* string

---

##### `oldPath`<sup>Required</sup> <a name="oldPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.oldPath"></a>

```typescript
public readonly oldPath: string;
```

- *Type:* string

---

##### `baseVersionInput`<sup>Optional</sup> <a name="baseVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersionInput"></a>

```typescript
public readonly baseVersionInput: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isComparisonFromMergeBaseInput`<sup>Optional</sup> <a name="isComparisonFromMergeBaseInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBaseInput"></a>

```typescript
public readonly isComparisonFromMergeBaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.baseVersion"></a>

```typescript
public readonly baseVersion: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isComparisonFromMergeBase`<sup>Required</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.isComparisonFromMergeBase"></a>

```typescript
public readonly isComparisonFromMergeBase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiff.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryDiffChanges <a name="DataOciDevopsRepositoryDiffChanges" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffChanges: dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges = { ... }
```


### DataOciDevopsRepositoryDiffChangesDiffSections <a name="DataOciDevopsRepositoryDiffChangesDiffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffChangesDiffSections: dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections = { ... }
```


### DataOciDevopsRepositoryDiffChangesDiffSectionsLines <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsLines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffChangesDiffSectionsLines: dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines = { ... }
```


### DataOciDevopsRepositoryDiffConfig <a name="DataOciDevopsRepositoryDiffConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffConfig: dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.baseVersion">baseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#base_version DataOciDevopsRepositoryDiff#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.filePath">filePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#file_path DataOciDevopsRepositoryDiff#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#repository_id DataOciDevopsRepositoryDiff#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#target_version DataOciDevopsRepositoryDiff#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#id DataOciDevopsRepositoryDiff#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#is_comparison_from_merge_base DataOciDevopsRepositoryDiff#is_comparison_from_merge_base}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.baseVersion"></a>

```typescript
public readonly baseVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#base_version DataOciDevopsRepositoryDiff#base_version}.

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#file_path DataOciDevopsRepositoryDiff#file_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#repository_id DataOciDevopsRepositoryDiff#repository_id}.

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#target_version DataOciDevopsRepositoryDiff#target_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#id DataOciDevopsRepositoryDiff#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isComparisonFromMergeBase`<sup>Optional</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffConfig.property.isComparisonFromMergeBase"></a>

```typescript
public readonly isComparisonFromMergeBase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diff#is_comparison_from_merge_base DataOciDevopsRepositoryDiff#is_comparison_from_merge_base}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.baseLine">baseLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.conflictMarker">conflictMarker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.lineContent">lineContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.targetLine">targetLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines">DataOciDevopsRepositoryDiffChangesDiffSectionsLines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.baseLine"></a>

```typescript
public readonly baseLine: number;
```

- *Type:* number

---

##### `conflictMarker`<sup>Required</sup> <a name="conflictMarker" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.conflictMarker"></a>

```typescript
public readonly conflictMarker: string;
```

- *Type:* string

---

##### `lineContent`<sup>Required</sup> <a name="lineContent" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.lineContent"></a>

```typescript
public readonly lineContent: string;
```

- *Type:* string

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.targetLine"></a>

```typescript
public readonly targetLine: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffChangesDiffSectionsLines;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLines">DataOciDevopsRepositoryDiffChangesDiffSectionsLines</a>

---


### DataOciDevopsRepositoryDiffChangesDiffSectionsList <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference <a name="DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections">DataOciDevopsRepositoryDiffChangesDiffSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.lines"></a>

```typescript
public readonly lines: DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffChangesDiffSectionsLinesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffChangesDiffSections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSections">DataOciDevopsRepositoryDiffChangesDiffSections</a>

---


### DataOciDevopsRepositoryDiffChangesList <a name="DataOciDevopsRepositoryDiffChangesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffChangesOutputReference <a name="DataOciDevopsRepositoryDiffChangesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiff } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseLine">baseLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseSpan">baseSpan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.diffSections">diffSections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList">DataOciDevopsRepositoryDiffChangesDiffSectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetLine">targetLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetSpan">targetSpan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges">DataOciDevopsRepositoryDiffChanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseLine"></a>

```typescript
public readonly baseLine: number;
```

- *Type:* number

---

##### `baseSpan`<sup>Required</sup> <a name="baseSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.baseSpan"></a>

```typescript
public readonly baseSpan: number;
```

- *Type:* number

---

##### `diffSections`<sup>Required</sup> <a name="diffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.diffSections"></a>

```typescript
public readonly diffSections: DataOciDevopsRepositoryDiffChangesDiffSectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesDiffSectionsList">DataOciDevopsRepositoryDiffChangesDiffSectionsList</a>

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetLine"></a>

```typescript
public readonly targetLine: number;
```

- *Type:* number

---

##### `targetSpan`<sup>Required</sup> <a name="targetSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.targetSpan"></a>

```typescript
public readonly targetSpan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffChanges;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiff.DataOciDevopsRepositoryDiffChanges">DataOciDevopsRepositoryDiffChanges</a>

---



