# `dataOciDevopsBuildRun` Submodule <a name="`dataOciDevopsBuildRun` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildRun <a name="DataOciDevopsBuildRun" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_run oci_devops_build_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRun(scope: Construct, id: string, config: DataOciDevopsBuildRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig">DataOciDevopsBuildRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig">DataOciDevopsBuildRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isConstruct"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRun.DataOciDevopsBuildRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformElement"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.generateConfigForImport"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRun.DataOciDevopsBuildRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsBuildRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsBuildRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsBuildRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildOutputs">buildOutputs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList">DataOciDevopsBuildRunBuildOutputsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunArguments">buildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList">DataOciDevopsBuildRunBuildRunArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunProgress">buildRunProgress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList">DataOciDevopsBuildRunBuildRunProgressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunSource">buildRunSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList">DataOciDevopsBuildRunBuildRunSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.commitInfo">commitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList">DataOciDevopsBuildRunCommitInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunIdInput">buildRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunId">buildRunId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `buildOutputs`<sup>Required</sup> <a name="buildOutputs" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildOutputs"></a>

```typescript
public readonly buildOutputs: DataOciDevopsBuildRunBuildOutputsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList">DataOciDevopsBuildRunBuildOutputsList</a>

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `buildRunArguments`<sup>Required</sup> <a name="buildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunArguments"></a>

```typescript
public readonly buildRunArguments: DataOciDevopsBuildRunBuildRunArgumentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList">DataOciDevopsBuildRunBuildRunArgumentsList</a>

---

##### `buildRunProgress`<sup>Required</sup> <a name="buildRunProgress" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunProgress"></a>

```typescript
public readonly buildRunProgress: DataOciDevopsBuildRunBuildRunProgressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList">DataOciDevopsBuildRunBuildRunProgressList</a>

---

##### `buildRunSource`<sup>Required</sup> <a name="buildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunSource"></a>

```typescript
public readonly buildRunSource: DataOciDevopsBuildRunBuildRunSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList">DataOciDevopsBuildRunBuildRunSourceList</a>

---

##### `commitInfo`<sup>Required</sup> <a name="commitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.commitInfo"></a>

```typescript
public readonly commitInfo: DataOciDevopsBuildRunCommitInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList">DataOciDevopsBuildRunCommitInfoList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `buildRunIdInput`<sup>Optional</sup> <a name="buildRunIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunIdInput"></a>

```typescript
public readonly buildRunIdInput: string;
```

- *Type:* string

---

##### `buildRunId`<sup>Required</sup> <a name="buildRunId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.buildRunId"></a>

```typescript
public readonly buildRunId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildRunBuildOutputs <a name="DataOciDevopsBuildRunBuildOutputs" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputs.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputs: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputs = { ... }
```


### DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters <a name="DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters = { ... }
```


### DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems <a name="DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems = { ... }
```


### DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts <a name="DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsDeliveredArtifacts: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts = { ... }
```


### DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems <a name="DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems = { ... }
```


### DataOciDevopsBuildRunBuildOutputsExportedVariables <a name="DataOciDevopsBuildRunBuildOutputsExportedVariables" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariables.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsExportedVariables: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariables = { ... }
```


### DataOciDevopsBuildRunBuildOutputsExportedVariablesItems <a name="DataOciDevopsBuildRunBuildOutputsExportedVariablesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsExportedVariablesItems: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItems = { ... }
```


### DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection <a name="DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection = { ... }
```


### DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems <a name="DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems = { ... }
```


### DataOciDevopsBuildRunBuildRunArguments <a name="DataOciDevopsBuildRunBuildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArguments.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunArguments: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArguments = { ... }
```


### DataOciDevopsBuildRunBuildRunArgumentsItems <a name="DataOciDevopsBuildRunBuildRunArgumentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunArgumentsItems: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItems = { ... }
```


### DataOciDevopsBuildRunBuildRunProgress <a name="DataOciDevopsBuildRunBuildRunProgress" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgress.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunProgress: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgress = { ... }
```


### DataOciDevopsBuildRunBuildRunSource <a name="DataOciDevopsBuildRunBuildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSource.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSource: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSource = { ... }
```


### DataOciDevopsBuildRunBuildRunSourceTriggerInfo <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfo.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSourceTriggerInfo: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfo = { ... }
```


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSourceTriggerInfoActions: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions = { ... }
```


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter = { ... }
```


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude = { ... }
```


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter = { ... }
```


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude = { ... }
```


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter: dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter = { ... }
```


### DataOciDevopsBuildRunCommitInfo <a name="DataOciDevopsBuildRunCommitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfo.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunCommitInfo: dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfo = { ... }
```


### DataOciDevopsBuildRunConfig <a name="DataOciDevopsBuildRunConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunConfig: dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.buildRunId">buildRunId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_run#build_run_id DataOciDevopsBuildRun#build_run_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildRunId`<sup>Required</sup> <a name="buildRunId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunConfig.property.buildRunId"></a>

```typescript
public readonly buildRunId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_run#build_run_id DataOciDevopsBuildRun#build_run_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList <a name="DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference <a name="DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItems</a>

---


### DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList <a name="DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference <a name="DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParameters</a>

---


### DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList <a name="DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference <a name="DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactRepositoryId">artifactRepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactType">artifactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactHash">deliveredArtifactHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactId">deliveredArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.outputArtifactName">outputArtifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems">DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactRepositoryId`<sup>Required</sup> <a name="artifactRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactRepositoryId"></a>

```typescript
public readonly artifactRepositoryId: string;
```

- *Type:* string

---

##### `artifactType`<sup>Required</sup> <a name="artifactType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.artifactType"></a>

```typescript
public readonly artifactType: string;
```

- *Type:* string

---

##### `deliveredArtifactHash`<sup>Required</sup> <a name="deliveredArtifactHash" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactHash"></a>

```typescript
public readonly deliveredArtifactHash: string;
```

- *Type:* string

---

##### `deliveredArtifactId`<sup>Required</sup> <a name="deliveredArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deliveredArtifactId"></a>

```typescript
public readonly deliveredArtifactId: string;
```

- *Type:* string

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `outputArtifactName`<sup>Required</sup> <a name="outputArtifactName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.outputArtifactName"></a>

```typescript
public readonly outputArtifactName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems">DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItems</a>

---


### DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList <a name="DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference <a name="DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList">DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts">DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList">DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts">DataOciDevopsBuildRunBuildOutputsDeliveredArtifacts</a>

---


### DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList <a name="DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference <a name="DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItems">DataOciDevopsBuildRunBuildOutputsExportedVariablesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsExportedVariablesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItems">DataOciDevopsBuildRunBuildOutputsExportedVariablesItems</a>

---


### DataOciDevopsBuildRunBuildOutputsExportedVariablesList <a name="DataOciDevopsBuildRunBuildOutputsExportedVariablesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference <a name="DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList">DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariables">DataOciDevopsBuildRunBuildOutputsExportedVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList">DataOciDevopsBuildRunBuildOutputsExportedVariablesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsExportedVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariables">DataOciDevopsBuildRunBuildOutputsExportedVariables</a>

---


### DataOciDevopsBuildRunBuildOutputsList <a name="DataOciDevopsBuildRunBuildOutputsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsOutputReference <a name="DataOciDevopsBuildRunBuildOutputsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.artifactOverrideParameters">artifactOverrideParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.deliveredArtifacts">deliveredArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList">DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.exportedVariables">exportedVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList">DataOciDevopsBuildRunBuildOutputsExportedVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.vulnerabilityAuditSummaryCollection">vulnerabilityAuditSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputs">DataOciDevopsBuildRunBuildOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactOverrideParameters`<sup>Required</sup> <a name="artifactOverrideParameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.artifactOverrideParameters"></a>

```typescript
public readonly artifactOverrideParameters: DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList">DataOciDevopsBuildRunBuildOutputsArtifactOverrideParametersList</a>

---

##### `deliveredArtifacts`<sup>Required</sup> <a name="deliveredArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.deliveredArtifacts"></a>

```typescript
public readonly deliveredArtifacts: DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList">DataOciDevopsBuildRunBuildOutputsDeliveredArtifactsList</a>

---

##### `exportedVariables`<sup>Required</sup> <a name="exportedVariables" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.exportedVariables"></a>

```typescript
public readonly exportedVariables: DataOciDevopsBuildRunBuildOutputsExportedVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsExportedVariablesList">DataOciDevopsBuildRunBuildOutputsExportedVariablesList</a>

---

##### `vulnerabilityAuditSummaryCollection`<sup>Required</sup> <a name="vulnerabilityAuditSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.vulnerabilityAuditSummaryCollection"></a>

```typescript
public readonly vulnerabilityAuditSummaryCollection: DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputs">DataOciDevopsBuildRunBuildOutputs</a>

---


### DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList <a name="DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference <a name="DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.buildStageId">buildStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.commitHash">commitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.vulnerabilityAuditId">vulnerabilityAuditId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildStageId`<sup>Required</sup> <a name="buildStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.buildStageId"></a>

```typescript
public readonly buildStageId: string;
```

- *Type:* string

---

##### `commitHash`<sup>Required</sup> <a name="commitHash" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.commitHash"></a>

```typescript
public readonly commitHash: string;
```

- *Type:* string

---

##### `vulnerabilityAuditId`<sup>Required</sup> <a name="vulnerabilityAuditId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.vulnerabilityAuditId"></a>

```typescript
public readonly vulnerabilityAuditId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItems</a>

---


### DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList <a name="DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference <a name="DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection">DataOciDevopsBuildRunBuildOutputsVulnerabilityAuditSummaryCollection</a>

---


### DataOciDevopsBuildRunBuildRunArgumentsItemsList <a name="DataOciDevopsBuildRunBuildRunArgumentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference <a name="DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItems">DataOciDevopsBuildRunBuildRunArgumentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunArgumentsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItems">DataOciDevopsBuildRunBuildRunArgumentsItems</a>

---


### DataOciDevopsBuildRunBuildRunArgumentsList <a name="DataOciDevopsBuildRunBuildRunArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunArgumentsOutputReference <a name="DataOciDevopsBuildRunBuildRunArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList">DataOciDevopsBuildRunBuildRunArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArguments">DataOciDevopsBuildRunBuildRunArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildRunBuildRunArgumentsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsItemsList">DataOciDevopsBuildRunBuildRunArgumentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunArguments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunArguments">DataOciDevopsBuildRunBuildRunArguments</a>

---


### DataOciDevopsBuildRunBuildRunProgressList <a name="DataOciDevopsBuildRunBuildRunProgressList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunProgressOutputReference <a name="DataOciDevopsBuildRunBuildRunProgressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.buildPipelineStageRunProgress">buildPipelineStageRunProgress</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgress">DataOciDevopsBuildRunBuildRunProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildPipelineStageRunProgress`<sup>Required</sup> <a name="buildPipelineStageRunProgress" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.buildPipelineStageRunProgress"></a>

```typescript
public readonly buildPipelineStageRunProgress: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunProgress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunProgress">DataOciDevopsBuildRunBuildRunProgress</a>

---


### DataOciDevopsBuildRunBuildRunSourceList <a name="DataOciDevopsBuildRunBuildRunSourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.triggerInfo">triggerInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSource">DataOciDevopsBuildRunBuildRunSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

##### `triggerInfo`<sup>Required</sup> <a name="triggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.triggerInfo"></a>

```typescript
public readonly triggerInfo: DataOciDevopsBuildRunBuildRunSourceTriggerInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSource">DataOciDevopsBuildRunBuildRunSource</a>

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.filePaths">filePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilter</a>

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fileFilter">fileFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileFilter`<sup>Required</sup> <a name="fileFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.fileFilter"></a>

```typescript
public readonly fileFilter: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeFileFilterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExclude</a>

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.filePaths">filePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.filePaths"></a>

```typescript
public readonly filePaths: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilter</a>

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef">baseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fileFilter">fileFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef">headRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef"></a>

```typescript
public readonly baseRef: string;
```

- *Type:* string

---

##### `fileFilter`<sup>Required</sup> <a name="fileFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fileFilter"></a>

```typescript
public readonly fileFilter: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeFileFilterList</a>

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef"></a>

```typescript
public readonly headRef: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterInclude</a>

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.exclude">exclude</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include">include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.exclude"></a>

```typescript
public readonly exclude: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include"></a>

```typescript
public readonly include: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterIncludeList</a>

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilter</a>

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsFilterList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActions</a>

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoList <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference <a name="DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfo">DataOciDevopsBuildRunBuildRunSourceTriggerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.actions"></a>

```typescript
public readonly actions: DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunBuildRunSourceTriggerInfoActionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunBuildRunSourceTriggerInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunBuildRunSourceTriggerInfo">DataOciDevopsBuildRunBuildRunSourceTriggerInfo</a>

---


### DataOciDevopsBuildRunCommitInfoList <a name="DataOciDevopsBuildRunCommitInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunCommitInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunCommitInfoOutputReference <a name="DataOciDevopsBuildRunCommitInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRun } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.commitHash">commitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.repositoryBranch">repositoryBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfo">DataOciDevopsBuildRunCommitInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitHash`<sup>Required</sup> <a name="commitHash" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.commitHash"></a>

```typescript
public readonly commitHash: string;
```

- *Type:* string

---

##### `repositoryBranch`<sup>Required</sup> <a name="repositoryBranch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.repositoryBranch"></a>

```typescript
public readonly repositoryBranch: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunCommitInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRun.DataOciDevopsBuildRunCommitInfo">DataOciDevopsBuildRunCommitInfo</a>

---



