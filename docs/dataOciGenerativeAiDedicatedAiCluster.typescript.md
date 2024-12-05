# `dataOciGenerativeAiDedicatedAiCluster` Submodule <a name="`dataOciGenerativeAiDedicatedAiCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiDedicatedAiCluster <a name="DataOciGenerativeAiDedicatedAiCluster" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_cluster oci_generative_ai_dedicated_ai_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster(scope: Construct, id: string, config: DataOciGenerativeAiDedicatedAiClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig">DataOciGenerativeAiDedicatedAiClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig">DataOciGenerativeAiDedicatedAiClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isConstruct"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformElement"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformDataSource"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.generateConfigForImport"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiDedicatedAiCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiDedicatedAiCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiDedicatedAiCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList">DataOciGenerativeAiDedicatedAiClusterCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.unitCount">unitCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.unitShape">unitShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.dedicatedAiClusterIdInput">dedicatedAiClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.dedicatedAiClusterId">dedicatedAiClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.capacity"></a>

```typescript
public readonly capacity: DataOciGenerativeAiDedicatedAiClusterCapacityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList">DataOciGenerativeAiDedicatedAiClusterCapacityList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unitCount`<sup>Required</sup> <a name="unitCount" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.unitCount"></a>

```typescript
public readonly unitCount: number;
```

- *Type:* number

---

##### `unitShape`<sup>Required</sup> <a name="unitShape" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.unitShape"></a>

```typescript
public readonly unitShape: string;
```

- *Type:* string

---

##### `dedicatedAiClusterIdInput`<sup>Optional</sup> <a name="dedicatedAiClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.dedicatedAiClusterIdInput"></a>

```typescript
public readonly dedicatedAiClusterIdInput: string;
```

- *Type:* string

---

##### `dedicatedAiClusterId`<sup>Required</sup> <a name="dedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.dedicatedAiClusterId"></a>

```typescript
public readonly dedicatedAiClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiDedicatedAiClusterCapacity <a name="DataOciGenerativeAiDedicatedAiClusterCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacity.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiDedicatedAiClusterCapacity: dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacity = { ... }
```


### DataOciGenerativeAiDedicatedAiClusterConfig <a name="DataOciGenerativeAiDedicatedAiClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiDedicatedAiClusterConfig: dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.dedicatedAiClusterId">dedicatedAiClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_cluster#dedicated_ai_cluster_id DataOciGenerativeAiDedicatedAiCluster#dedicated_ai_cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dedicatedAiClusterId`<sup>Required</sup> <a name="dedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterConfig.property.dedicatedAiClusterId"></a>

```typescript
public readonly dedicatedAiClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_dedicated_ai_cluster#dedicated_ai_cluster_id DataOciGenerativeAiDedicatedAiCluster#dedicated_ai_cluster_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiDedicatedAiClusterCapacityList <a name="DataOciGenerativeAiDedicatedAiClusterCapacityList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference <a name="DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiDedicatedAiCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.capacityType">capacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.totalEndpointCapacity">totalEndpointCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.usedEndpointCapacity">usedEndpointCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacity">DataOciGenerativeAiDedicatedAiClusterCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

---

##### `totalEndpointCapacity`<sup>Required</sup> <a name="totalEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.totalEndpointCapacity"></a>

```typescript
public readonly totalEndpointCapacity: number;
```

- *Type:* number

---

##### `usedEndpointCapacity`<sup>Required</sup> <a name="usedEndpointCapacity" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.usedEndpointCapacity"></a>

```typescript
public readonly usedEndpointCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiDedicatedAiClusterCapacity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiDedicatedAiCluster.DataOciGenerativeAiDedicatedAiClusterCapacity">DataOciGenerativeAiDedicatedAiClusterCapacity</a>

---



