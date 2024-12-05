# `dataOciDevopsDeployArtifact` Submodule <a name="`dataOciDevopsDeployArtifact` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployArtifact <a name="DataOciDevopsDeployArtifact" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifact oci_devops_deploy_artifact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact(scope: Construct, id: string, config: DataOciDevopsDeployArtifactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig">DataOciDevopsDeployArtifactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig">DataOciDevopsDeployArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isConstruct"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformElement"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformDataSource"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.generateConfigForImport"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDevopsDeployArtifact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDevopsDeployArtifact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDevopsDeployArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.argumentSubstitutionMode">argumentSubstitutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactSource">deployArtifactSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList">DataOciDevopsDeployArtifactDeployArtifactSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactType">deployArtifactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactIdInput">deployArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `argumentSubstitutionMode`<sup>Required</sup> <a name="argumentSubstitutionMode" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.argumentSubstitutionMode"></a>

```typescript
public readonly argumentSubstitutionMode: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deployArtifactSource`<sup>Required</sup> <a name="deployArtifactSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactSource"></a>

```typescript
public readonly deployArtifactSource: DataOciDevopsDeployArtifactDeployArtifactSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList">DataOciDevopsDeployArtifactDeployArtifactSourceList</a>

---

##### `deployArtifactType`<sup>Required</sup> <a name="deployArtifactType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactType"></a>

```typescript
public readonly deployArtifactType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `deployArtifactIdInput`<sup>Optional</sup> <a name="deployArtifactIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactIdInput"></a>

```typescript
public readonly deployArtifactIdInput: string;
```

- *Type:* string

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployArtifactConfig <a name="DataOciDevopsDeployArtifactConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployArtifactConfig: dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.deployArtifactId">deployArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifact#deploy_artifact_id DataOciDevopsDeployArtifact#deploy_artifact_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deployArtifactId`<sup>Required</sup> <a name="deployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactConfig.property.deployArtifactId"></a>

```typescript
public readonly deployArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifact#deploy_artifact_id DataOciDevopsDeployArtifact#deploy_artifact_id}.

---

### DataOciDevopsDeployArtifactDeployArtifactSource <a name="DataOciDevopsDeployArtifactDeployArtifactSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSource.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployArtifactDeployArtifactSource: dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSource = { ... }
```


### DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource <a name="DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

const dataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource: dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList <a name="DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference <a name="DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey">currentPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey">previousPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType">verificationKeySourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentPublicKey`<sup>Required</sup> <a name="currentPublicKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey"></a>

```typescript
public readonly currentPublicKey: string;
```

- *Type:* string

---

##### `previousPublicKey`<sup>Required</sup> <a name="previousPublicKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey"></a>

```typescript
public readonly previousPublicKey: string;
```

- *Type:* string

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId"></a>

```typescript
public readonly vaultSecretId: string;
```

- *Type:* string

---

##### `verificationKeySourceType`<sup>Required</sup> <a name="verificationKeySourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType"></a>

```typescript
public readonly verificationKeySourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource">DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource</a>

---


### DataOciDevopsDeployArtifactDeployArtifactSourceList <a name="DataOciDevopsDeployArtifactDeployArtifactSourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.get"></a>

```typescript
public get(index: number): DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference <a name="DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer"></a>

```typescript
import { dataOciDevopsDeployArtifact } from 'rhizo-co-terraform-provider-oci'

new dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent">base64EncodedContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl">chartUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath">deployArtifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType">deployArtifactSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion">deployArtifactVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType">helmArtifactSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource">helmVerificationKeySource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList">DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSource">DataOciDevopsDeployArtifactDeployArtifactSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `base64EncodedContent`<sup>Required</sup> <a name="base64EncodedContent" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.base64EncodedContent"></a>

```typescript
public readonly base64EncodedContent: string;
```

- *Type:* string

---

##### `chartUrl`<sup>Required</sup> <a name="chartUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.chartUrl"></a>

```typescript
public readonly chartUrl: string;
```

- *Type:* string

---

##### `deployArtifactPath`<sup>Required</sup> <a name="deployArtifactPath" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactPath"></a>

```typescript
public readonly deployArtifactPath: string;
```

- *Type:* string

---

##### `deployArtifactSourceType`<sup>Required</sup> <a name="deployArtifactSourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactSourceType"></a>

```typescript
public readonly deployArtifactSourceType: string;
```

- *Type:* string

---

##### `deployArtifactVersion`<sup>Required</sup> <a name="deployArtifactVersion" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.deployArtifactVersion"></a>

```typescript
public readonly deployArtifactVersion: string;
```

- *Type:* string

---

##### `helmArtifactSourceType`<sup>Required</sup> <a name="helmArtifactSourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmArtifactSourceType"></a>

```typescript
public readonly helmArtifactSourceType: string;
```

- *Type:* string

---

##### `helmVerificationKeySource`<sup>Required</sup> <a name="helmVerificationKeySource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.helmVerificationKeySource"></a>

```typescript
public readonly helmVerificationKeySource: DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList">DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList</a>

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDevopsDeployArtifactDeployArtifactSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifact.DataOciDevopsDeployArtifactDeployArtifactSource">DataOciDevopsDeployArtifactDeployArtifactSource</a>

---



