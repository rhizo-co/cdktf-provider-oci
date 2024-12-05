# `dataOciDevopsBuildPipelineStages` Submodule <a name="`dataOciDevopsBuildPipelineStages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildPipelineStages <a name="DataOciDevopsBuildPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages oci_devops_build_pipeline_stages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages(scope: Construct, id: string, config?: DataOciDevopsBuildPipelineStagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig">DataOciDevopsBuildPipelineStagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig">DataOciDevopsBuildPipelineStagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetBuildPipelineId">resetBuildPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDevopsBuildPipelineStagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>[]

---

##### `resetBuildPipelineId` <a name="resetBuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetBuildPipelineId"></a>

```typescript
public resetBuildPipelineId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildPipelineStages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isConstruct"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformElement"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsBuildPipelineStages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsBuildPipelineStages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsBuildPipelineStages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildPipelineStages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineStageCollection">buildPipelineStageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList">DataOciDevopsBuildPipelineStagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineIdInput">buildPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `buildPipelineStageCollection`<sup>Required</sup> <a name="buildPipelineStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineStageCollection"></a>

```typescript
public readonly buildPipelineStageCollection: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsBuildPipelineStagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList">DataOciDevopsBuildPipelineStagesFilterList</a>

---

##### `buildPipelineIdInput`<sup>Optional</sup> <a name="buildPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineIdInput"></a>

```typescript
public readonly buildPipelineIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDevopsBuildPipelineStagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollection: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig = { ... }
```


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria = { ... }
```


### DataOciDevopsBuildPipelineStagesConfig <a name="DataOciDevopsBuildPipelineStagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesConfig: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#build_pipeline_id DataOciDevopsBuildPipelineStages#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#compartment_id DataOciDevopsBuildPipelineStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#display_name DataOciDevopsBuildPipelineStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#id DataOciDevopsBuildPipelineStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#state DataOciDevopsBuildPipelineStages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildPipelineId`<sup>Optional</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#build_pipeline_id DataOciDevopsBuildPipelineStages#build_pipeline_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#compartment_id DataOciDevopsBuildPipelineStages#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#display_name DataOciDevopsBuildPipelineStages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDevopsBuildPipelineStagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#filter DataOciDevopsBuildPipelineStages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#id DataOciDevopsBuildPipelineStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#state DataOciDevopsBuildPipelineStages#state}.

---

### DataOciDevopsBuildPipelineStagesFilter <a name="DataOciDevopsBuildPipelineStagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildPipelineStagesFilter: dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#name DataOciDevopsBuildPipelineStages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#values DataOciDevopsBuildPipelineStages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#regex DataOciDevopsBuildPipelineStages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#name DataOciDevopsBuildPipelineStages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#values DataOciDevopsBuildPipelineStages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_pipeline_stages#regex DataOciDevopsBuildPipelineStages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollection</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.buildRunnerType">buildRunnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildRunnerType`<sup>Required</sup> <a name="buildRunnerType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.buildRunnerType"></a>

```typescript
public readonly buildRunnerType: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfig</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollection</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactName">artifactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `artifactName`<sup>Required</sup> <a name="artifactName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.artifactName"></a>

```typescript
public readonly artifactName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollection</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStagePredecessorCollection">buildPipelineStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStageType">buildPipelineStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildRunnerShapeConfig">buildRunnerShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSourceCollection">buildSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSpecFile">buildSpecFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deliverArtifactCollection">deliverArtifactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deployPipelineId">deployPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.isPassAllParametersEnabled">isPassAllParametersEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.primaryBuildSource">primaryBuildSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.privateAccessConfig">privateAccessConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.stageExecutionTimeoutInSeconds">stageExecutionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.waitCriteria">waitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `buildPipelineStagePredecessorCollection`<sup>Required</sup> <a name="buildPipelineStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStagePredecessorCollection"></a>

```typescript
public readonly buildPipelineStagePredecessorCollection: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildPipelineStagePredecessorCollectionList</a>

---

##### `buildPipelineStageType`<sup>Required</sup> <a name="buildPipelineStageType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildPipelineStageType"></a>

```typescript
public readonly buildPipelineStageType: string;
```

- *Type:* string

---

##### `buildRunnerShapeConfig`<sup>Required</sup> <a name="buildRunnerShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildRunnerShapeConfig"></a>

```typescript
public readonly buildRunnerShapeConfig: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildRunnerShapeConfigList</a>

---

##### `buildSourceCollection`<sup>Required</sup> <a name="buildSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSourceCollection"></a>

```typescript
public readonly buildSourceCollection: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsBuildSourceCollectionList</a>

---

##### `buildSpecFile`<sup>Required</sup> <a name="buildSpecFile" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.buildSpecFile"></a>

```typescript
public readonly buildSpecFile: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deliverArtifactCollection`<sup>Required</sup> <a name="deliverArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deliverArtifactCollection"></a>

```typescript
public readonly deliverArtifactCollection: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsDeliverArtifactCollectionList</a>

---

##### `deployPipelineId`<sup>Required</sup> <a name="deployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.deployPipelineId"></a>

```typescript
public readonly deployPipelineId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `isPassAllParametersEnabled`<sup>Required</sup> <a name="isPassAllParametersEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.isPassAllParametersEnabled"></a>

```typescript
public readonly isPassAllParametersEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `primaryBuildSource`<sup>Required</sup> <a name="primaryBuildSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.primaryBuildSource"></a>

```typescript
public readonly primaryBuildSource: string;
```

- *Type:* string

---

##### `privateAccessConfig`<sup>Required</sup> <a name="privateAccessConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.privateAccessConfig"></a>

```typescript
public readonly privateAccessConfig: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `stageExecutionTimeoutInSeconds`<sup>Required</sup> <a name="stageExecutionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.stageExecutionTimeoutInSeconds"></a>

```typescript
public readonly stageExecutionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `waitCriteria`<sup>Required</sup> <a name="waitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.waitCriteria"></a>

```typescript
public readonly waitCriteria: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItems</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.networkChannelType">networkChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkChannelType`<sup>Required</sup> <a name="networkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.networkChannelType"></a>

```typescript
public readonly networkChannelType: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsPrivateAccessConfig</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration">waitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitType">waitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `waitDuration`<sup>Required</sup> <a name="waitDuration" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration"></a>

```typescript
public readonly waitDuration: string;
```

- *Type:* string

---

##### `waitType`<sup>Required</sup> <a name="waitType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.waitType"></a>

```typescript
public readonly waitType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsWaitCriteria</a>

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference <a name="DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection">DataOciDevopsBuildPipelineStagesBuildPipelineStageCollection</a>

---


### DataOciDevopsBuildPipelineStagesFilterList <a name="DataOciDevopsBuildPipelineStagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildPipelineStagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsBuildPipelineStagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>[]

---


### DataOciDevopsBuildPipelineStagesFilterOutputReference <a name="DataOciDevopsBuildPipelineStagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildPipelineStages } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsBuildPipelineStagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildPipelineStages.DataOciDevopsBuildPipelineStagesFilter">DataOciDevopsBuildPipelineStagesFilter</a>

---



