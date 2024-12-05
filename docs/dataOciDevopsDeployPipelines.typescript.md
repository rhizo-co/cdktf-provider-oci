# `dataOciDevopsDeployPipelines` Submodule <a name="`dataOciDevopsDeployPipelines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployPipelines <a name="DataOciDevopsDeployPipelines" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines oci_devops_deploy_pipelines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines(scope: Construct, id: string, config?: DataOciDevopsDeployPipelinesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig">DataOciDevopsDeployPipelinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig">DataOciDevopsDeployPipelinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDevopsDeployPipelinesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployPipelines resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isConstruct"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformElement"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.generateConfigForImport"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsDeployPipelines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsDeployPipelines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsDeployPipelines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployPipelines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.deployPipelineCollection">deployPipelineCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList">DataOciDevopsDeployPipelinesDeployPipelineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList">DataOciDevopsDeployPipelinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deployPipelineCollection`<sup>Required</sup> <a name="deployPipelineCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.deployPipelineCollection"></a>

```typescript
public readonly deployPipelineCollection: DataOciDevopsDeployPipelinesDeployPipelineCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList">DataOciDevopsDeployPipelinesDeployPipelineCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.filter"></a>

```typescript
public readonly filter: DataOciDevopsDeployPipelinesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList">DataOciDevopsDeployPipelinesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDevopsDeployPipelinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelines.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployPipelinesConfig <a name="DataOciDevopsDeployPipelinesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesConfig: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#compartment_id DataOciDevopsDeployPipelines#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#display_name DataOciDevopsDeployPipelines#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#id DataOciDevopsDeployPipelines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#project_id DataOciDevopsDeployPipelines#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#state DataOciDevopsDeployPipelines#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#compartment_id DataOciDevopsDeployPipelines#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#display_name DataOciDevopsDeployPipelines#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDevopsDeployPipelinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#filter DataOciDevopsDeployPipelines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#id DataOciDevopsDeployPipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#project_id DataOciDevopsDeployPipelines#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#state DataOciDevopsDeployPipelines#state}.

---

### DataOciDevopsDeployPipelinesDeployPipelineCollection <a name="DataOciDevopsDeployPipelinesDeployPipelineCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollection.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollection: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollection = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItems <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItems: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItems = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters = { ... }
```


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems = { ... }
```


### DataOciDevopsDeployPipelinesFilter <a name="DataOciDevopsDeployPipelinesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployPipelinesFilter: dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#name DataOciDevopsDeployPipelines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#values DataOciDevopsDeployPipelines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#regex DataOciDevopsDeployPipelines#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#name DataOciDevopsDeployPipelines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#values DataOciDevopsDeployPipelines#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipelines#regex DataOciDevopsDeployPipelines#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">deployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployStageId`<sup>Required</sup> <a name="deployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```typescript
public readonly deployStageId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItems</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStages</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages">deployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

---

##### `deployPipelineStages`<sup>Required</sup> <a name="deployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages"></a>

```typescript
public readonly deployPipelineStages: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsDeployPipelineStagesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItems</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifacts</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">deployStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployStageId`<sup>Required</sup> <a name="deployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```typescript
public readonly deployStageId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStages</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId">deployEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages">deployPipelineStages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployEnvironmentId`<sup>Required</sup> <a name="deployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId"></a>

```typescript
public readonly deployEnvironmentId: string;
```

- *Type:* string

---

##### `deployPipelineStages`<sup>Required</sup> <a name="deployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages"></a>

```typescript
public readonly deployPipelineStages: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItems</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironments</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItems</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParameters</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.deployPipelineArtifacts">deployPipelineArtifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.deployPipelineEnvironments">deployPipelineEnvironments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.deployPipelineParameters">deployPipelineParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deployPipelineArtifacts`<sup>Required</sup> <a name="deployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.deployPipelineArtifacts"></a>

```typescript
public readonly deployPipelineArtifacts: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineArtifactsList</a>

---

##### `deployPipelineEnvironments`<sup>Required</sup> <a name="deployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.deployPipelineEnvironments"></a>

```typescript
public readonly deployPipelineEnvironments: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineEnvironmentsList</a>

---

##### `deployPipelineParameters`<sup>Required</sup> <a name="deployPipelineParameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.deployPipelineParameters"></a>

```typescript
public readonly deployPipelineParameters: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsDeployPipelineParametersList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItems">DataOciDevopsDeployPipelinesDeployPipelineCollectionItems</a>

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionList <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference <a name="DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollection">DataOciDevopsDeployPipelinesDeployPipelineCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList">DataOciDevopsDeployPipelinesDeployPipelineCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployPipelinesDeployPipelineCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesDeployPipelineCollection">DataOciDevopsDeployPipelinesDeployPipelineCollection</a>

---


### DataOciDevopsDeployPipelinesFilterList <a name="DataOciDevopsDeployPipelinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployPipelinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsDeployPipelinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>[]

---


### DataOciDevopsDeployPipelinesFilterOutputReference <a name="DataOciDevopsDeployPipelinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployPipelines } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDevopsDeployPipelinesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipelines.DataOciDevopsDeployPipelinesFilter">DataOciDevopsDeployPipelinesFilter</a>

---



