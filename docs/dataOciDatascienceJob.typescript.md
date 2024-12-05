# `dataOciDatascienceJob` Submodule <a name="`dataOciDatascienceJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceJob <a name="DataOciDatascienceJob" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job oci_datascience_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJob(scope: Construct, id: string, config: DataOciDatascienceJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig">DataOciDatascienceJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig">DataOciDatascienceJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatascienceJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isConstruct"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceJob.DataOciDatascienceJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isTerraformElement"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceJob.DataOciDatascienceJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isTerraformDataSource"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceJob.DataOciDatascienceJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.generateConfigForImport"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

dataOciDatascienceJob.DataOciDatascienceJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatascienceJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatascienceJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatascienceJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactContentDisposition">artifactContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactContentLength">artifactContentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactContentMd5">artifactContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactLastModified">artifactLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.deleteRelatedJobRuns">deleteRelatedJobRuns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.emptyArtifact">emptyArtifact</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobArtifact">jobArtifact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobConfigurationDetails">jobConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList">DataOciDatascienceJobJobConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobEnvironmentConfigurationDetails">jobEnvironmentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList">DataOciDatascienceJobJobEnvironmentConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobInfrastructureConfigurationDetails">jobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobJobInfrastructureConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobLogConfigurationDetails">jobLogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList">DataOciDatascienceJobJobLogConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobStorageMountConfigurationDetailsList">jobStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `artifactContentDisposition`<sup>Required</sup> <a name="artifactContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactContentDisposition"></a>

```typescript
public readonly artifactContentDisposition: string;
```

- *Type:* string

---

##### `artifactContentLength`<sup>Required</sup> <a name="artifactContentLength" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactContentLength"></a>

```typescript
public readonly artifactContentLength: string;
```

- *Type:* string

---

##### `artifactContentMd5`<sup>Required</sup> <a name="artifactContentMd5" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactContentMd5"></a>

```typescript
public readonly artifactContentMd5: string;
```

- *Type:* string

---

##### `artifactLastModified`<sup>Required</sup> <a name="artifactLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.artifactLastModified"></a>

```typescript
public readonly artifactLastModified: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deleteRelatedJobRuns`<sup>Required</sup> <a name="deleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.deleteRelatedJobRuns"></a>

```typescript
public readonly deleteRelatedJobRuns: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `emptyArtifact`<sup>Required</sup> <a name="emptyArtifact" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.emptyArtifact"></a>

```typescript
public readonly emptyArtifact: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobArtifact`<sup>Required</sup> <a name="jobArtifact" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobArtifact"></a>

```typescript
public readonly jobArtifact: string;
```

- *Type:* string

---

##### `jobConfigurationDetails`<sup>Required</sup> <a name="jobConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobConfigurationDetails"></a>

```typescript
public readonly jobConfigurationDetails: DataOciDatascienceJobJobConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList">DataOciDatascienceJobJobConfigurationDetailsList</a>

---

##### `jobEnvironmentConfigurationDetails`<sup>Required</sup> <a name="jobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobEnvironmentConfigurationDetails"></a>

```typescript
public readonly jobEnvironmentConfigurationDetails: DataOciDatascienceJobJobEnvironmentConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList">DataOciDatascienceJobJobEnvironmentConfigurationDetailsList</a>

---

##### `jobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="jobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobInfrastructureConfigurationDetails"></a>

```typescript
public readonly jobInfrastructureConfigurationDetails: DataOciDatascienceJobJobInfrastructureConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobJobInfrastructureConfigurationDetailsList</a>

---

##### `jobLogConfigurationDetails`<sup>Required</sup> <a name="jobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobLogConfigurationDetails"></a>

```typescript
public readonly jobLogConfigurationDetails: DataOciDatascienceJobJobLogConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList">DataOciDatascienceJobJobLogConfigurationDetailsList</a>

---

##### `jobStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="jobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobStorageMountConfigurationDetailsList"></a>

```typescript
public readonly jobStorageMountConfigurationDetailsList: DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceJobConfig <a name="DataOciDatascienceJobConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceJobConfig: dataOciDatascienceJob.DataOciDatascienceJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job#job_id DataOciDatascienceJob#job_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job#job_id DataOciDatascienceJob#job_id}.

---

### DataOciDatascienceJobJobConfigurationDetails <a name="DataOciDatascienceJobJobConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceJobJobConfigurationDetails: dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetails = { ... }
```


### DataOciDatascienceJobJobEnvironmentConfigurationDetails <a name="DataOciDatascienceJobJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceJobJobEnvironmentConfigurationDetails: dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetails = { ... }
```


### DataOciDatascienceJobJobInfrastructureConfigurationDetails <a name="DataOciDatascienceJobJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceJobJobInfrastructureConfigurationDetails: dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetails = { ... }
```


### DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails: dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails = { ... }
```


### DataOciDatascienceJobJobLogConfigurationDetails <a name="DataOciDatascienceJobJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetails.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceJobJobLogConfigurationDetails: dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetails = { ... }
```


### DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct: dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceJobJobConfigurationDetailsList <a name="DataOciDatascienceJobJobConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceJobJobConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceJobJobConfigurationDetailsOutputReference <a name="DataOciDatascienceJobJobConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetails">DataOciDatascienceJobJobConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceJobJobConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobConfigurationDetails">DataOciDatascienceJobJobConfigurationDetails</a>

---


### DataOciDatascienceJobJobEnvironmentConfigurationDetailsList <a name="DataOciDatascienceJobJobEnvironmentConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference <a name="DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType">jobEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetails">DataOciDatascienceJobJobEnvironmentConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

---

##### `jobEnvironmentType`<sup>Required</sup> <a name="jobEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType"></a>

```typescript
public readonly jobEnvironmentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceJobJobEnvironmentConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobEnvironmentConfigurationDetails">DataOciDatascienceJobJobEnvironmentConfigurationDetails</a>

---


### DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList <a name="DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DataOciDatascienceJobJobInfrastructureConfigurationDetailsList <a name="DataOciDatascienceJobJobInfrastructureConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference <a name="DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">jobInfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">jobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetails">DataOciDatascienceJobJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

---

##### `jobInfrastructureType`<sup>Required</sup> <a name="jobInfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```typescript
public readonly jobInfrastructureType: string;
```

- *Type:* string

---

##### `jobShapeConfigDetails`<sup>Required</sup> <a name="jobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```typescript
public readonly jobShapeConfigDetails: DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceJobJobInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobInfrastructureConfigurationDetails">DataOciDatascienceJobJobInfrastructureConfigurationDetails</a>

---


### DataOciDatascienceJobJobLogConfigurationDetailsList <a name="DataOciDatascienceJobJobLogConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatascienceJobJobLogConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceJobJobLogConfigurationDetailsOutputReference <a name="DataOciDatascienceJobJobLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetails">DataOciDatascienceJobJobLogConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceJobJobLogConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobLogConfigurationDetails">DataOciDatascienceJobJobLogConfigurationDetails</a>

---


### DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.get"></a>

```typescript
public get(index: number): DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```typescript
import { dataOciDatascienceJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destinationDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">exportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `destinationDirectoryName`<sup>Required</sup> <a name="destinationDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```typescript
public readonly destinationDirectoryName: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJob.DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobJobStorageMountConfigurationDetailsListStruct</a>

---



