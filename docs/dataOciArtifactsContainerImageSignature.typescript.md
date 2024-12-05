# `dataOciArtifactsContainerImageSignature` Submodule <a name="`dataOciArtifactsContainerImageSignature` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerImageSignature <a name="DataOciArtifactsContainerImageSignature" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature oci_artifacts_container_image_signature}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignature } from 'rhizo-co-terraform-provider-oci'

new dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature(scope: Construct, id: string, config: DataOciArtifactsContainerImageSignatureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig">DataOciArtifactsContainerImageSignatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig">DataOciArtifactsContainerImageSignatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerImageSignature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isConstruct"></a>

```typescript
import { dataOciArtifactsContainerImageSignature } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformElement"></a>

```typescript
import { dataOciArtifactsContainerImageSignature } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformDataSource"></a>

```typescript
import { dataOciArtifactsContainerImageSignature } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.generateConfigForImport"></a>

```typescript
import { dataOciArtifactsContainerImageSignature } from 'rhizo-co-terraform-provider-oci'

dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciArtifactsContainerImageSignature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciArtifactsContainerImageSignature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciArtifactsContainerImageSignature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerImageSignature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.imageSignatureIdInput">imageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `imageSignatureIdInput`<sup>Optional</sup> <a name="imageSignatureIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.imageSignatureIdInput"></a>

```typescript
public readonly imageSignatureIdInput: string;
```

- *Type:* string

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignature.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerImageSignatureConfig <a name="DataOciArtifactsContainerImageSignatureConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.Initializer"></a>

```typescript
import { dataOciArtifactsContainerImageSignature } from 'rhizo-co-terraform-provider-oci'

const dataOciArtifactsContainerImageSignatureConfig: dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature#image_signature_id DataOciArtifactsContainerImageSignature#image_signature_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerImageSignature.DataOciArtifactsContainerImageSignatureConfig.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_image_signature#image_signature_id DataOciArtifactsContainerImageSignature#image_signature_id}.

---



