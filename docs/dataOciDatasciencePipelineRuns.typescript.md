# `dataOciDatasciencePipelineRuns` Submodule <a name="`dataOciDatasciencePipelineRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatasciencePipelineRuns <a name="DataOciDatasciencePipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs oci_datascience_pipeline_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns(scope: Construct, id: string, config: DataOciDatasciencePipelineRunsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig">DataOciDatasciencePipelineRunsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig">DataOciDatasciencePipelineRunsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId">resetPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatasciencePipelineRunsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>[]

---

##### `resetCreatedBy` <a name="resetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPipelineId` <a name="resetPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId"></a>

```typescript
public resetPipelineId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatasciencePipelineRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatasciencePipelineRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatasciencePipelineRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns">pipelineRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter"></a>

```typescript
public readonly filter: DataOciDatasciencePipelineRunsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a>

---

##### `pipelineRuns`<sup>Required</sup> <a name="pipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns"></a>

```typescript
public readonly pipelineRuns: DataOciDatasciencePipelineRunsPipelineRunsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatasciencePipelineRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatasciencePipelineRunsConfig <a name="DataOciDatasciencePipelineRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsConfig: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy">createdBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatasciencePipelineRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#filter DataOciDatasciencePipelineRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineId`<sup>Optional</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}.

---

### DataOciDatasciencePipelineRunsFilter <a name="DataOciDatasciencePipelineRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsFilter: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}.

---

### DataOciDatasciencePipelineRunsPipelineRuns <a name="DataOciDatasciencePipelineRunsPipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRuns: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsLogDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsLogDetails: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails = { ... }
```


### DataOciDatasciencePipelineRunsPipelineRunsStepRuns <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDatasciencePipelineRunsPipelineRunsStepRuns: dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatasciencePipelineRunsFilterList <a name="DataOciDatasciencePipelineRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatasciencePipelineRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>[]

---


### DataOciDatasciencePipelineRunsFilterOutputReference <a name="DataOciDatasciencePipelineRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatasciencePipelineRunsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsLogDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails">configurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns">deleteRelatedJobRuns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails">logConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails">logDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails">stepOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns">stepRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails"></a>

```typescript
public readonly configurationDetails: DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a>

---

##### `configurationOverrideDetails`<sup>Required</sup> <a name="configurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails"></a>

```typescript
public readonly configurationOverrideDetails: DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deleteRelatedJobRuns`<sup>Required</sup> <a name="deleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns"></a>

```typescript
public readonly deleteRelatedJobRuns: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `logConfigurationOverrideDetails`<sup>Required</sup> <a name="logConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails"></a>

```typescript
public readonly logConfigurationOverrideDetails: DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a>

---

##### `logDetails`<sup>Required</sup> <a name="logDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails"></a>

```typescript
public readonly logDetails: DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a>

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl"></a>

```typescript
public readonly opcParentRptUrl: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stepOverrideDetails`<sup>Required</sup> <a name="stepOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails"></a>

```typescript
public readonly stepOverrideDetails: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a>

---

##### `stepRuns`<sup>Required</sup> <a name="stepRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns"></a>

```typescript
public readonly stepRuns: DataOciDatasciencePipelineRunsPipelineRunsStepRunsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRuns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepConfigurationDetails`<sup>Required</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails"></a>

```typescript
public readonly stepConfigurationDetails: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a>

---

##### `stepContainerConfigurationDetails`<sup>Required</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```typescript
public readonly stepContainerConfigurationDetails: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a>

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get"></a>

```typescript
public get(index: number): DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer"></a>

```typescript
import { dataOciDatasciencePipelineRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId">jobRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType">stepType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId"></a>

```typescript
public readonly jobRunId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType"></a>

```typescript
public readonly stepType: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatasciencePipelineRunsPipelineRunsStepRuns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a>

---



