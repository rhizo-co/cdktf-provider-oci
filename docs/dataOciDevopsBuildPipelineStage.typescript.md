# `dataOciDevopsBuildPipelineStage` Submodule <a name="`dataOciDevopsBuildPipelineStage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildPipelineStage <a name="DataOciDevopsBuildPipelineStage" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage oci_devops_build_pipeline_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage(scope: Construct, id: string, config: DataOciDevopsBuildPipelineStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig">DataOciDevopsBuildPipelineStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig">DataOciDevopsBuildPipelineStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isConstruct"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformElement"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsBuildPipelineStage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsBuildPipelineStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsBuildPipelineStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildPipelineStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection">buildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageType">buildPipelineStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildRunnerShapeConfig">buildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSourceCollection">buildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList">DataOciDevopsBuildPipelineStageBuildSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSpecFile">buildSpecFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deliverArtifactCollection">deliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deployPipelineId">deployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.isPassAllParametersEnabled">isPassAllParametersEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.primaryBuildSource">primaryBuildSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.privateAccessConfig">privateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList">DataOciDevopsBuildPipelineStagePrivateAccessConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds">stageExecutionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList">DataOciDevopsBuildPipelineStageWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageIdInput">buildPipelineStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageId">buildPipelineStageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `buildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="buildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStagePredecessorCollection"></a>

```typescript
public readonly buildPipelineStagePredecessorCollection: DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList</a>

---

##### `buildPipelineStageType`<sup>Required</sup> <a name="buildPipelineStageType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageType"></a>

```typescript
public readonly buildPipelineStageType: string;
```

- *Type:* string

---

##### `buildRunnerShapeConfig`<sup>Required</sup> <a name="buildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildRunnerShapeConfig"></a>

```typescript
public readonly buildRunnerShapeConfig: DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList</a>

---

##### `buildSourceCollection`<sup>Required</sup> <a name="buildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSourceCollection"></a>

```typescript
public readonly buildSourceCollection: DataOciDevopsBuildPipelineStageBuildSourceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList">DataOciDevopsBuildPipelineStageBuildSourceCollectionList</a>

---

##### `buildSpecFile`<sup>Required</sup> <a name="buildSpecFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildSpecFile"></a>

```typescript
public readonly buildSpecFile: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deliverArtifactCollection`<sup>Required</sup> <a name="deliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deliverArtifactCollection"></a>

```typescript
public readonly deliverArtifactCollection: DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList</a>

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.deployPipelineId"></a>

```typescript
public readonly deployPipelineId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `isPassAllParametersEnabled`<sup>Required</sup> <a name="isPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.isPassAllParametersEnabled"></a>

```typescript
public readonly isPassAllParametersEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `primaryBuildSource`<sup>Required</sup> <a name="primaryBuildSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.primaryBuildSource"></a>

```typescript
public readonly primaryBuildSource: string;
```

- *Type:* string

---

##### `privateAccessConfig`<sup>Required</sup> <a name="privateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.privateAccessConfig"></a>

```typescript
public readonly privateAccessConfig: DataOciDevopsBuildPipelineStagePrivateAccessConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList">DataOciDevopsBuildPipelineStagePrivateAccessConfigList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `stageExecutionTimeoutInSeconds`<sup>Required</sup> <a name="stageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.stageExecutionTimeoutInSeconds"></a>

```typescript
public readonly stageExecutionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `waitCriteria`<sup>Required</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.waitCriteria"></a>

```typescript
public readonly waitCriteria: DataOciDevopsBuildPipelineStageWaitCriteriaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList">DataOciDevopsBuildPipelineStageWaitCriteriaList</a>

---

##### `buildPipelineStageIdInput`<sup>Optional</sup> <a name="buildPipelineStageIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageIdInput"></a>

```typescript
public readonly buildPipelineStageIdInput: string;
```

- *Type:* string

---

##### `buildPipelineStageId`<sup>Required</sup> <a name="buildPipelineStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.buildPipelineStageId"></a>

```typescript
public readonly buildPipelineStageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection = { ... }
```


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems = { ... }
```


### DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig <a name="DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageBuildRunnerShapeConfig: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig = { ... }
```


### DataOciDevopsBuildPipelineStageBuildSourceCollection <a name="DataOciDevopsBuildPipelineStageBuildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageBuildSourceCollection: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection = { ... }
```


### DataOciDevopsBuildPipelineStageBuildSourceCollectionItems <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageBuildSourceCollectionItems: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems = { ... }
```


### DataOciDevopsBuildPipelineStageConfig <a name="DataOciDevopsBuildPipelineStageConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageConfig: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.buildPipelineStageId">buildPipelineStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage#build_pipeline_stage_id DataOciDevopsBuildPipelineStage#build_pipeline_stage_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildPipelineStageId`<sup>Required</sup> <a name="buildPipelineStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageConfig.property.buildPipelineStageId"></a>

```typescript
public readonly buildPipelineStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stage#build_pipeline_stage_id DataOciDevopsBuildPipelineStage#build_pipeline_stage_id}.

---

### DataOciDevopsBuildPipelineStageDeliverArtifactCollection <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageDeliverArtifactCollection: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection = { ... }
```


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems = { ... }
```


### DataOciDevopsBuildPipelineStagePrivateAccessConfig <a name="DataOciDevopsBuildPipelineStagePrivateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagePrivateAccessConfig: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig = { ... }
```


### DataOciDevopsBuildPipelineStageWaitCriteria <a name="DataOciDevopsBuildPipelineStageWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStageWaitCriteria: dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItems</a>

---


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference <a name="DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStageBuildPipelineStagePredecessorCollection</a>

---


### DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList <a name="DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference <a name="DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType">buildRunnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildRunnerType`<sup>Required</sup> <a name="buildRunnerType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.buildRunnerType"></a>

```typescript
public readonly buildRunnerType: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStageBuildRunnerShapeConfig</a>

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems">DataOciDevopsBuildPipelineStageBuildSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageBuildSourceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItems">DataOciDevopsBuildPipelineStageBuildSourceCollectionItems</a>

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionList <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference <a name="DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection">DataOciDevopsBuildPipelineStageBuildSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStageBuildSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageBuildSourceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageBuildSourceCollection">DataOciDevopsBuildPipelineStageBuildSourceCollection</a>

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName">artifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `artifactName`<sup>Required</sup> <a name="artifactName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.artifactName"></a>

```typescript
public readonly artifactName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItems</a>

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference <a name="DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection">DataOciDevopsBuildPipelineStageDeliverArtifactCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStageDeliverArtifactCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageDeliverArtifactCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageDeliverArtifactCollection">DataOciDevopsBuildPipelineStageDeliverArtifactCollection</a>

---


### DataOciDevopsBuildPipelineStagePrivateAccessConfigList <a name="DataOciDevopsBuildPipelineStagePrivateAccessConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference <a name="DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig">DataOciDevopsBuildPipelineStagePrivateAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.networkChannelType"></a>

```typescript
public readonly networkChannelType: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagePrivateAccessConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStagePrivateAccessConfig">DataOciDevopsBuildPipelineStagePrivateAccessConfig</a>

---


### DataOciDevopsBuildPipelineStageWaitCriteriaList <a name="DataOciDevopsBuildPipelineStageWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference <a name="DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStage } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration">waitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType">waitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria">DataOciDevopsBuildPipelineStageWaitCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.waitType"></a>

```typescript
public readonly waitType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStageWaitCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStage.DataOciDevopsBuildPipelineStageWaitCriteria">DataOciDevopsBuildPipelineStageWaitCriteria</a>

---



