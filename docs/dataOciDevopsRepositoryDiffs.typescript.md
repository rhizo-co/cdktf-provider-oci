# `dataOciDevopsRepositoryDiffs` Submodule <a name="`dataOciDevopsRepositoryDiffs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryDiffs <a name="DataOciDevopsRepositoryDiffs" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs oci_devops_repository_diffs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs(scope: Construct, id: string, config: DataOciDevopsRepositoryDiffsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig">DataOciDevopsRepositoryDiffsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig">DataOciDevopsRepositoryDiffsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetIsComparisonFromMergeBase">resetIsComparisonFromMergeBase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetTargetRepositoryId">resetTargetRepositoryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDevopsRepositoryDiffsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsComparisonFromMergeBase` <a name="resetIsComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetIsComparisonFromMergeBase"></a>

```typescript
public resetIsComparisonFromMergeBase(): void
```

##### `resetTargetRepositoryId` <a name="resetTargetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.resetTargetRepositoryId"></a>

```typescript
public resetTargetRepositoryId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryDiffs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryDiffs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsRepositoryDiffs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsRepositoryDiffs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryDiffs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.diffCollection">diffCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList">DataOciDevopsRepositoryDiffsDiffCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList">DataOciDevopsRepositoryDiffsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersionInput">baseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBaseInput">isComparisonFromMergeBaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryIdInput">targetRepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersion">baseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryId">targetRepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `diffCollection`<sup>Required</sup> <a name="diffCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.diffCollection"></a>

```typescript
public readonly diffCollection: DataOciDevopsRepositoryDiffsDiffCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList">DataOciDevopsRepositoryDiffsDiffCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsRepositoryDiffsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList">DataOciDevopsRepositoryDiffsFilterList</a>

---

##### `baseVersionInput`<sup>Optional</sup> <a name="baseVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersionInput"></a>

```typescript
public readonly baseVersionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDevopsRepositoryDiffsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isComparisonFromMergeBaseInput`<sup>Optional</sup> <a name="isComparisonFromMergeBaseInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBaseInput"></a>

```typescript
public readonly isComparisonFromMergeBaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `targetRepositoryIdInput`<sup>Optional</sup> <a name="targetRepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryIdInput"></a>

```typescript
public readonly targetRepositoryIdInput: string;
```

- *Type:* string

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.baseVersion"></a>

```typescript
public readonly baseVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isComparisonFromMergeBase`<sup>Required</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.isComparisonFromMergeBase"></a>

```typescript
public readonly isComparisonFromMergeBase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `targetRepositoryId`<sup>Required</sup> <a name="targetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetRepositoryId"></a>

```typescript
public readonly targetRepositoryId: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryDiffsConfig <a name="DataOciDevopsRepositoryDiffsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffsConfig: dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.baseVersion">baseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.isComparisonFromMergeBase">isComparisonFromMergeBase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetRepositoryId">targetRepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseVersion`<sup>Required</sup> <a name="baseVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.baseVersion"></a>

```typescript
public readonly baseVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#base_version DataOciDevopsRepositoryDiffs#base_version}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#repository_id DataOciDevopsRepositoryDiffs#repository_id}.

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_version DataOciDevopsRepositoryDiffs#target_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDevopsRepositoryDiffsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#filter DataOciDevopsRepositoryDiffs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#id DataOciDevopsRepositoryDiffs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isComparisonFromMergeBase`<sup>Optional</sup> <a name="isComparisonFromMergeBase" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.isComparisonFromMergeBase"></a>

```typescript
public readonly isComparisonFromMergeBase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#is_comparison_from_merge_base DataOciDevopsRepositoryDiffs#is_comparison_from_merge_base}.

---

##### `targetRepositoryId`<sup>Optional</sup> <a name="targetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsConfig.property.targetRepositoryId"></a>

```typescript
public readonly targetRepositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#target_repository_id DataOciDevopsRepositoryDiffs#target_repository_id}.

---

### DataOciDevopsRepositoryDiffsDiffCollection <a name="DataOciDevopsRepositoryDiffsDiffCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffsDiffCollection: dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection = { ... }
```


### DataOciDevopsRepositoryDiffsDiffCollectionItems <a name="DataOciDevopsRepositoryDiffsDiffCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffsDiffCollectionItems: dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems = { ... }
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffsDiffCollectionItemsChanges: dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges = { ... }
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections: dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections = { ... }
```


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines: dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines = { ... }
```


### DataOciDevopsRepositoryDiffsFilter <a name="DataOciDevopsRepositoryDiffsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryDiffsFilter: dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#name DataOciDevopsRepositoryDiffs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#values DataOciDevopsRepositoryDiffs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#regex DataOciDevopsRepositoryDiffs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#name DataOciDevopsRepositoryDiffs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#values DataOciDevopsRepositoryDiffs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_diffs#regex DataOciDevopsRepositoryDiffs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.baseLine">baseLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.conflictMarker">conflictMarker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.lineContent">lineContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.targetLine">targetLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.baseLine"></a>

```typescript
public readonly baseLine: number;
```

- *Type:* number

---

##### `conflictMarker`<sup>Required</sup> <a name="conflictMarker" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.conflictMarker"></a>

```typescript
public readonly conflictMarker: string;
```

- *Type:* string

---

##### `lineContent`<sup>Required</sup> <a name="lineContent" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.lineContent"></a>

```typescript
public readonly lineContent: string;
```

- *Type:* string

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.targetLine"></a>

```typescript
public readonly targetLine: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLines</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.lines">lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lines`<sup>Required</sup> <a name="lines" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.lines"></a>

```typescript
public readonly lines: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsLinesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSections</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseLine">baseLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseSpan">baseSpan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.diffSections">diffSections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetLine">targetLine</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetSpan">targetSpan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges">DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseLine`<sup>Required</sup> <a name="baseLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseLine"></a>

```typescript
public readonly baseLine: number;
```

- *Type:* number

---

##### `baseSpan`<sup>Required</sup> <a name="baseSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.baseSpan"></a>

```typescript
public readonly baseSpan: number;
```

- *Type:* number

---

##### `diffSections`<sup>Required</sup> <a name="diffSections" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.diffSections"></a>

```typescript
public readonly diffSections: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesDiffSectionsList</a>

---

##### `targetLine`<sup>Required</sup> <a name="targetLine" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetLine"></a>

```typescript
public readonly targetLine: number;
```

- *Type:* number

---

##### `targetSpan`<sup>Required</sup> <a name="targetSpan" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.targetSpan"></a>

```typescript
public readonly targetSpan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges">DataOciDevopsRepositoryDiffsDiffCollectionItemsChanges</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsList <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.areConflictsInFile">areConflictsInFile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.changes">changes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isBinary">isBinary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isLarge">isLarge</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newId">newId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newPath">newPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldId">oldId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldPath">oldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems">DataOciDevopsRepositoryDiffsDiffCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areConflictsInFile`<sup>Required</sup> <a name="areConflictsInFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.areConflictsInFile"></a>

```typescript
public readonly areConflictsInFile: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `changes`<sup>Required</sup> <a name="changes" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.changes"></a>

```typescript
public readonly changes: DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList">DataOciDevopsRepositoryDiffsDiffCollectionItemsChangesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isBinary`<sup>Required</sup> <a name="isBinary" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isBinary"></a>

```typescript
public readonly isBinary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLarge`<sup>Required</sup> <a name="isLarge" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.isLarge"></a>

```typescript
public readonly isLarge: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `newId`<sup>Required</sup> <a name="newId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newId"></a>

```typescript
public readonly newId: string;
```

- *Type:* string

---

##### `newPath`<sup>Required</sup> <a name="newPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.newPath"></a>

```typescript
public readonly newPath: string;
```

- *Type:* string

---

##### `oldId`<sup>Required</sup> <a name="oldId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldId"></a>

```typescript
public readonly oldId: string;
```

- *Type:* string

---

##### `oldPath`<sup>Required</sup> <a name="oldPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.oldPath"></a>

```typescript
public readonly oldPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffsDiffCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItems">DataOciDevopsRepositoryDiffsDiffCollectionItems</a>

---


### DataOciDevopsRepositoryDiffsDiffCollectionList <a name="DataOciDevopsRepositoryDiffsDiffCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffsDiffCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryDiffsDiffCollectionOutputReference <a name="DataOciDevopsRepositoryDiffsDiffCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection">DataOciDevopsRepositoryDiffsDiffCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsRepositoryDiffsDiffCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionItemsList">DataOciDevopsRepositoryDiffsDiffCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryDiffsDiffCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsDiffCollection">DataOciDevopsRepositoryDiffsDiffCollection</a>

---


### DataOciDevopsRepositoryDiffsFilterList <a name="DataOciDevopsRepositoryDiffsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryDiffsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsRepositoryDiffsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>[]

---


### DataOciDevopsRepositoryDiffsFilterOutputReference <a name="DataOciDevopsRepositoryDiffsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryDiffs } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsRepositoryDiffsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryDiffs.DataOciDevopsRepositoryDiffsFilter">DataOciDevopsRepositoryDiffsFilter</a>

---



