# `dataOciDevopsBuildRuns` Submodule <a name="`dataOciDevopsBuildRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildRuns <a name="DataOciDevopsBuildRuns" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs oci_devops_build_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRuns(scope: Construct, id: string, config?: DataOciDevopsBuildRunsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig">DataOciDevopsBuildRunsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig">DataOciDevopsBuildRunsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetBuildPipelineId">resetBuildPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDevopsBuildRunsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>[]

---

##### `resetBuildPipelineId` <a name="resetBuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetBuildPipelineId"></a>

```typescript
public resetBuildPipelineId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsBuildRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsBuildRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsBuildRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildRunSummaryCollection">buildRunSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList">DataOciDevopsBuildRunsBuildRunSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList">DataOciDevopsBuildRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineIdInput">buildPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `buildRunSummaryCollection`<sup>Required</sup> <a name="buildRunSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildRunSummaryCollection"></a>

```typescript
public readonly buildRunSummaryCollection: DataOciDevopsBuildRunsBuildRunSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList">DataOciDevopsBuildRunsBuildRunSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsBuildRunsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList">DataOciDevopsBuildRunsFilterList</a>

---

##### `buildPipelineIdInput`<sup>Optional</sup> <a name="buildPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineIdInput"></a>

```typescript
public readonly buildPipelineIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDevopsBuildRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildRunsBuildRunSummaryCollection <a name="DataOciDevopsBuildRunsBuildRunSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollection: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItems <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItems: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude = { ... }
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo = { ... }
```


### DataOciDevopsBuildRunsConfig <a name="DataOciDevopsBuildRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsConfig: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildPipelineId`<sup>Optional</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDevopsBuildRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#filter DataOciDevopsBuildRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}.

---

### DataOciDevopsBuildRunsFilter <a name="DataOciDevopsBuildRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsBuildRunsFilter: dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#name DataOciDevopsBuildRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#values DataOciDevopsBuildRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#regex DataOciDevopsBuildRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#name DataOciDevopsBuildRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#values DataOciDevopsBuildRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#regex DataOciDevopsBuildRuns#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.triggerInfo">triggerInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `triggerInfo`<sup>Required</sup> <a name="triggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.triggerInfo"></a>

```typescript
public readonly triggerInfo: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef">baseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef">headRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef"></a>

```typescript
public readonly baseRef: string;
```

- *Type:* string

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef"></a>

```typescript
public readonly headRef: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include">include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource">triggerSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include"></a>

```typescript
public readonly include: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList</a>

---

##### `triggerSource`<sup>Required</sup> <a name="triggerSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource"></a>

```typescript
public readonly triggerSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.actions"></a>

```typescript
public readonly actions: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.commitHash">commitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryBranch">repositoryBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitHash`<sup>Required</sup> <a name="commitHash" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.commitHash"></a>

```typescript
public readonly commitHash: string;
```

- *Type:* string

---

##### `repositoryBranch`<sup>Required</sup> <a name="repositoryBranch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryBranch"></a>

```typescript
public readonly repositoryBranch: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildPipelineId">buildPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunArguments">buildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunProgressSummary">buildRunProgressSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunSource">buildRunSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.commitInfo">commitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildPipelineId`<sup>Required</sup> <a name="buildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildPipelineId"></a>

```typescript
public readonly buildPipelineId: string;
```

- *Type:* string

---

##### `buildRunArguments`<sup>Required</sup> <a name="buildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunArguments"></a>

```typescript
public readonly buildRunArguments: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList</a>

---

##### `buildRunProgressSummary`<sup>Required</sup> <a name="buildRunProgressSummary" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunProgressSummary"></a>

```typescript
public readonly buildRunProgressSummary: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList</a>

---

##### `buildRunSource`<sup>Required</sup> <a name="buildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunSource"></a>

```typescript
public readonly buildRunSource: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList</a>

---

##### `commitInfo`<sup>Required</sup> <a name="commitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.commitInfo"></a>

```typescript
public readonly commitInfo: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItems</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection">DataOciDevopsBuildRunsBuildRunSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsBuildRunsBuildRunSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection">DataOciDevopsBuildRunsBuildRunSummaryCollection</a>

---


### DataOciDevopsBuildRunsFilterList <a name="DataOciDevopsBuildRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsBuildRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsBuildRunsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>[]

---


### DataOciDevopsBuildRunsFilterOutputReference <a name="DataOciDevopsBuildRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsBuildRuns } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsBuildRunsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter">DataOciDevopsBuildRunsFilter</a>

---



