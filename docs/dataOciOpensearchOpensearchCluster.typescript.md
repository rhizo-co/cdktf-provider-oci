# `dataOciOpensearchOpensearchCluster` Submodule <a name="`dataOciOpensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchCluster <a name="DataOciOpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster(scope: Construct, id: string, config: DataOciOpensearchOpensearchClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig">DataOciOpensearchOpensearchClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig">DataOciOpensearchOpensearchClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct"></a>

```typescript
import { dataOciOpensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement"></a>

```typescript
import { dataOciOpensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource"></a>

```typescript
import { dataOciOpensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport"></a>

```typescript
import { dataOciOpensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpensearchOpensearchCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains">availabilityDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount">dataNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType">dataNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount">masterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType">masterNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn">opendashboardFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp">opendashboardPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn">opensearchFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp">opensearchPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName">securityMasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode">securityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion">softwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId">subnetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted">timeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb">totalStorageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId">vcnCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput">opensearchClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId">opensearchClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityDomains`<sup>Required</sup> <a name="availabilityDomains" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains"></a>

```typescript
public readonly availabilityDomains: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount"></a>

```typescript
public readonly dataNodeCount: number;
```

- *Type:* number

---

##### `dataNodeHostBareMetalShape`<sup>Required</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```typescript
public readonly dataNodeHostBareMetalShape: string;
```

- *Type:* string

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```typescript
public readonly dataNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```typescript
public readonly dataNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType"></a>

```typescript
public readonly dataNodeHostType: string;
```

- *Type:* string

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```typescript
public readonly dataNodeStorageGb: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount"></a>

```typescript
public readonly masterNodeCount: number;
```

- *Type:* number

---

##### `masterNodeHostBareMetalShape`<sup>Required</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```typescript
public readonly masterNodeHostBareMetalShape: string;
```

- *Type:* string

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```typescript
public readonly masterNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```typescript
public readonly masterNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType"></a>

```typescript
public readonly masterNodeHostType: string;
```

- *Type:* string

---

##### `opendashboardFqdn`<sup>Required</sup> <a name="opendashboardFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```typescript
public readonly opendashboardFqdn: string;
```

- *Type:* string

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```typescript
public readonly opendashboardNodeCount: number;
```

- *Type:* number

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```typescript
public readonly opendashboardNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```typescript
public readonly opendashboardNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `opendashboardPrivateIp`<sup>Required</sup> <a name="opendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```typescript
public readonly opendashboardPrivateIp: string;
```

- *Type:* string

---

##### `opensearchFqdn`<sup>Required</sup> <a name="opensearchFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn"></a>

```typescript
public readonly opensearchFqdn: string;
```

- *Type:* string

---

##### `opensearchPrivateIp`<sup>Required</sup> <a name="opensearchPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```typescript
public readonly opensearchPrivateIp: string;
```

- *Type:* string

---

##### `securityMasterUserName`<sup>Required</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName"></a>

```typescript
public readonly securityMasterUserName: string;
```

- *Type:* string

---

##### `securityMasterUserPasswordHash`<sup>Required</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```typescript
public readonly securityMasterUserPasswordHash: string;
```

- *Type:* string

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion"></a>

```typescript
public readonly softwareVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```typescript
public readonly subnetCompartmentId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted"></a>

```typescript
public readonly timeDeleted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalStorageGb`<sup>Required</sup> <a name="totalStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb"></a>

```typescript
public readonly totalStorageGb: number;
```

- *Type:* number

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```typescript
public readonly vcnCompartmentId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `opensearchClusterIdInput`<sup>Optional</sup> <a name="opensearchClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput"></a>

```typescript
public readonly opensearchClusterIdInput: string;
```

- *Type:* string

---

##### `opensearchClusterId`<sup>Required</sup> <a name="opensearchClusterId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId"></a>

```typescript
public readonly opensearchClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchClusterConfig <a name="DataOciOpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.Initializer"></a>

```typescript
import { dataOciOpensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciOpensearchOpensearchClusterConfig: dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId">opensearchClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `opensearchClusterId`<sup>Required</sup> <a name="opensearchClusterId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId"></a>

```typescript
public readonly opensearchClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}.

---



