# `dataOciDevopsRepositoryCommits` Submodule <a name="`dataOciDevopsRepositoryCommits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryCommits <a name="DataOciDevopsRepositoryCommits" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits oci_devops_repository_commits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits(scope: Construct, id: string, config: DataOciDevopsRepositoryCommitsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig">DataOciDevopsRepositoryCommitsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig">DataOciDevopsRepositoryCommitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetAuthorName">resetAuthorName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetCommitMessage">resetCommitMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetExcludeRefName">resetExcludeRefName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilePath">resetFilePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetRefName">resetRefName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampGreaterThanOrEqualTo">resetTimestampGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampLessThanOrEqualTo">resetTimestampLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDevopsRepositoryCommitsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>[]

---

##### `resetAuthorName` <a name="resetAuthorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetAuthorName"></a>

```typescript
public resetAuthorName(): void
```

##### `resetCommitMessage` <a name="resetCommitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetCommitMessage"></a>

```typescript
public resetCommitMessage(): void
```

##### `resetExcludeRefName` <a name="resetExcludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetExcludeRefName"></a>

```typescript
public resetExcludeRefName(): void
```

##### `resetFilePath` <a name="resetFilePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilePath"></a>

```typescript
public resetFilePath(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRefName` <a name="resetRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetRefName"></a>

```typescript
public resetRefName(): void
```

##### `resetTimestampGreaterThanOrEqualTo` <a name="resetTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampGreaterThanOrEqualTo"></a>

```typescript
public resetTimestampGreaterThanOrEqualTo(): void
```

##### `resetTimestampLessThanOrEqualTo` <a name="resetTimestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.resetTimestampLessThanOrEqualTo"></a>

```typescript
public resetTimestampLessThanOrEqualTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryCommits resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryCommits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsRepositoryCommits to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsRepositoryCommits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryCommits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList">DataOciDevopsRepositoryCommitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryCommitCollection">repositoryCommitCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorNameInput">authorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessageInput">commitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefNameInput">excludeRefNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refNameInput">refNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualToInput">timestampGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualToInput">timestampLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorName">authorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefName">excludeRefName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refName">refName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualTo">timestampGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualTo">timestampLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsRepositoryCommitsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList">DataOciDevopsRepositoryCommitsFilterList</a>

---

##### `repositoryCommitCollection`<sup>Required</sup> <a name="repositoryCommitCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryCommitCollection"></a>

```typescript
public readonly repositoryCommitCollection: DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList</a>

---

##### `authorNameInput`<sup>Optional</sup> <a name="authorNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorNameInput"></a>

```typescript
public readonly authorNameInput: string;
```

- *Type:* string

---

##### `commitMessageInput`<sup>Optional</sup> <a name="commitMessageInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessageInput"></a>

```typescript
public readonly commitMessageInput: string;
```

- *Type:* string

---

##### `excludeRefNameInput`<sup>Optional</sup> <a name="excludeRefNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefNameInput"></a>

```typescript
public readonly excludeRefNameInput: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDevopsRepositoryCommitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `refNameInput`<sup>Optional</sup> <a name="refNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refNameInput"></a>

```typescript
public readonly refNameInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `timestampGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timestampGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualToInput"></a>

```typescript
public readonly timestampGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timestampLessThanOrEqualToInput`<sup>Optional</sup> <a name="timestampLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualToInput"></a>

```typescript
public readonly timestampLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `excludeRefName`<sup>Required</sup> <a name="excludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.excludeRefName"></a>

```typescript
public readonly excludeRefName: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `refName`<sup>Required</sup> <a name="refName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.refName"></a>

```typescript
public readonly refName: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `timestampGreaterThanOrEqualTo`<sup>Required</sup> <a name="timestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampGreaterThanOrEqualTo"></a>

```typescript
public readonly timestampGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timestampLessThanOrEqualTo`<sup>Required</sup> <a name="timestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.timestampLessThanOrEqualTo"></a>

```typescript
public readonly timestampLessThanOrEqualTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommits.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryCommitsConfig <a name="DataOciDevopsRepositoryCommitsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryCommitsConfig: dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.authorName">authorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.commitMessage">commitMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.excludeRefName">excludeRefName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filePath">filePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.refName">refName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampGreaterThanOrEqualTo">timestampGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampLessThanOrEqualTo">timestampLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#repository_id DataOciDevopsRepositoryCommits#repository_id}.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#author_name DataOciDevopsRepositoryCommits#author_name}.

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#commit_message DataOciDevopsRepositoryCommits#commit_message}.

---

##### `excludeRefName`<sup>Optional</sup> <a name="excludeRefName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.excludeRefName"></a>

```typescript
public readonly excludeRefName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#exclude_ref_name DataOciDevopsRepositoryCommits#exclude_ref_name}.

---

##### `filePath`<sup>Optional</sup> <a name="filePath" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#file_path DataOciDevopsRepositoryCommits#file_path}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDevopsRepositoryCommitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#filter DataOciDevopsRepositoryCommits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#id DataOciDevopsRepositoryCommits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refName`<sup>Optional</sup> <a name="refName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.refName"></a>

```typescript
public readonly refName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#ref_name DataOciDevopsRepositoryCommits#ref_name}.

---

##### `timestampGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampGreaterThanOrEqualTo"></a>

```typescript
public readonly timestampGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_greater_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_greater_than_or_equal_to}.

---

##### `timestampLessThanOrEqualTo`<sup>Optional</sup> <a name="timestampLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsConfig.property.timestampLessThanOrEqualTo"></a>

```typescript
public readonly timestampLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#timestamp_less_than_or_equal_to DataOciDevopsRepositoryCommits#timestamp_less_than_or_equal_to}.

---

### DataOciDevopsRepositoryCommitsFilter <a name="DataOciDevopsRepositoryCommitsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryCommitsFilter: dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#name DataOciDevopsRepositoryCommits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#values DataOciDevopsRepositoryCommits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#regex DataOciDevopsRepositoryCommits#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#name DataOciDevopsRepositoryCommits#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#values DataOciDevopsRepositoryCommits#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_commits#regex DataOciDevopsRepositoryCommits#regex}.

---

### DataOciDevopsRepositoryCommitsRepositoryCommitCollection <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryCommitsRepositoryCommitCollection: dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection = { ... }
```


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems: dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositoryCommitsFilterList <a name="DataOciDevopsRepositoryCommitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryCommitsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsRepositoryCommitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>[]

---


### DataOciDevopsRepositoryCommitsFilterOutputReference <a name="DataOciDevopsRepositoryCommitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsRepositoryCommitsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsFilter">DataOciDevopsRepositoryCommitsFilter</a>

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorEmail">authorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorName">authorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitId">commitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerEmail">committerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerName">committerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.parentCommitIds">parentCommitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.treeId">treeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

---

##### `commitId`<sup>Required</sup> <a name="commitId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitId"></a>

```typescript
public readonly commitId: string;
```

- *Type:* string

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `committerEmail`<sup>Required</sup> <a name="committerEmail" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerEmail"></a>

```typescript
public readonly committerEmail: string;
```

- *Type:* string

---

##### `committerName`<sup>Required</sup> <a name="committerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.committerName"></a>

```typescript
public readonly committerName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `parentCommitIds`<sup>Required</sup> <a name="parentCommitIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.parentCommitIds"></a>

```typescript
public readonly parentCommitIds: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `treeId`<sup>Required</sup> <a name="treeId" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.treeId"></a>

```typescript
public readonly treeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItems</a>

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference <a name="DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsRepositoryCommits } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection">DataOciDevopsRepositoryCommitsRepositoryCommitCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList">DataOciDevopsRepositoryCommitsRepositoryCommitCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsRepositoryCommitsRepositoryCommitCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryCommits.DataOciDevopsRepositoryCommitsRepositoryCommitCollection">DataOciDevopsRepositoryCommitsRepositoryCommitCollection</a>

---



