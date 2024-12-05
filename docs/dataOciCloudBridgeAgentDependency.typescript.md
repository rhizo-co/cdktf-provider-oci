# `dataOciCloudBridgeAgentDependency` Submodule <a name="`dataOciCloudBridgeAgentDependency` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAgentDependency <a name="DataOciCloudBridgeAgentDependency" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency oci_cloud_bridge_agent_dependency}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer"></a>

```typescript
import { dataOciCloudBridgeAgentDependency } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency(scope: Construct, id: string, config: DataOciCloudBridgeAgentDependencyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig">DataOciCloudBridgeAgentDependencyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig">DataOciCloudBridgeAgentDependencyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAgentDependency resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isConstruct"></a>

```typescript
import { dataOciCloudBridgeAgentDependency } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformElement"></a>

```typescript
import { dataOciCloudBridgeAgentDependency } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformDataSource"></a>

```typescript
import { dataOciCloudBridgeAgentDependency } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport"></a>

```typescript
import { dataOciCloudBridgeAgentDependency } from 'rhizo-co-terraform-provider-oci'

dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudBridgeAgentDependency resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudBridgeAgentDependency to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudBridgeAgentDependency that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAgentDependency to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyName">dependencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyVersion">dependencyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.eTag">eTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyIdInput">agentDependencyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyId">agentDependencyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `dependencyName`<sup>Required</sup> <a name="dependencyName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyName"></a>

```typescript
public readonly dependencyName: string;
```

- *Type:* string

---

##### `dependencyVersion`<sup>Required</sup> <a name="dependencyVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyVersion"></a>

```typescript
public readonly dependencyVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `agentDependencyIdInput`<sup>Optional</sup> <a name="agentDependencyIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyIdInput"></a>

```typescript
public readonly agentDependencyIdInput: string;
```

- *Type:* string

---

##### `agentDependencyId`<sup>Required</sup> <a name="agentDependencyId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyId"></a>

```typescript
public readonly agentDependencyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAgentDependencyConfig <a name="DataOciCloudBridgeAgentDependencyConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.Initializer"></a>

```typescript
import { dataOciCloudBridgeAgentDependency } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudBridgeAgentDependencyConfig: dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.agentDependencyId">agentDependencyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency#agent_dependency_id DataOciCloudBridgeAgentDependency#agent_dependency_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentDependencyId`<sup>Required</sup> <a name="agentDependencyId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.agentDependencyId"></a>

```typescript
public readonly agentDependencyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency#agent_dependency_id DataOciCloudBridgeAgentDependency#agent_dependency_id}.

---



