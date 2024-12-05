# `dataOciOcvpCluster` Submodule <a name="`dataOciOcvpCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpCluster <a name="DataOciOcvpCluster" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster oci_ocvp_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpCluster(scope: Construct, id: string, config: DataOciOcvpClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig">DataOciOcvpClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig">DataOciOcvpClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isConstruct"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpCluster.DataOciOcvpCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformElement"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpCluster.DataOciOcvpCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformDataSource"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpCluster.DataOciOcvpCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOcvpCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList">DataOciOcvpClusterDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiHostsCount">esxiHostsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialCommitment">initialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostShapeName">initialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList">DataOciOcvpClusterNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.sddcId">sddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.upgradeLicenses">upgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList">DataOciOcvpClusterUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereType">vsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereUpgradeObjects">vsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList">DataOciOcvpClusterVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.actualEsxiHostsCount"></a>

```typescript
public readonly actualEsxiHostsCount: number;
```

- *Type:* number

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.datastores"></a>

```typescript
public readonly datastores: DataOciOcvpClusterDatastoresList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList">DataOciOcvpClusterDatastoresList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiHostsCount"></a>

```typescript
public readonly esxiHostsCount: number;
```

- *Type:* number

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialCommitment`<sup>Required</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialCommitment"></a>

```typescript
public readonly initialCommitment: string;
```

- *Type:* string

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostOcpuCount"></a>

```typescript
public readonly initialHostOcpuCount: number;
```

- *Type:* number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostShapeName"></a>

```typescript
public readonly initialHostShapeName: string;
```

- *Type:* string

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.instanceDisplayNamePrefix"></a>

```typescript
public readonly instanceDisplayNamePrefix: string;
```

- *Type:* string

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.isShieldedInstanceEnabled"></a>

```typescript
public readonly isShieldedInstanceEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataOciOcvpClusterNetworkConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList">DataOciOcvpClusterNetworkConfigurationList</a>

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradeLicenses`<sup>Required</sup> <a name="upgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.upgradeLicenses"></a>

```typescript
public readonly upgradeLicenses: DataOciOcvpClusterUpgradeLicensesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList">DataOciOcvpClusterUpgradeLicensesList</a>

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereType"></a>

```typescript
public readonly vsphereType: string;
```

- *Type:* string

---

##### `vsphereUpgradeObjects`<sup>Required</sup> <a name="vsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereUpgradeObjects"></a>

```typescript
public readonly vsphereUpgradeObjects: DataOciOcvpClusterVsphereUpgradeObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList">DataOciOcvpClusterVsphereUpgradeObjectsList</a>

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.workloadNetworkCidr"></a>

```typescript
public readonly workloadNetworkCidr: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpClusterConfig <a name="DataOciOcvpClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpClusterConfig: dataOciOcvpCluster.DataOciOcvpClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#cluster_id DataOciOcvpCluster#cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#cluster_id DataOciOcvpCluster#cluster_id}.

---

### DataOciOcvpClusterDatastores <a name="DataOciOcvpClusterDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpClusterDatastores: dataOciOcvpCluster.DataOciOcvpClusterDatastores = { ... }
```


### DataOciOcvpClusterNetworkConfiguration <a name="DataOciOcvpClusterNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpClusterNetworkConfiguration: dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration = { ... }
```


### DataOciOcvpClusterUpgradeLicenses <a name="DataOciOcvpClusterUpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpClusterUpgradeLicenses: dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses = { ... }
```


### DataOciOcvpClusterVsphereUpgradeObjects <a name="DataOciOcvpClusterVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpClusterVsphereUpgradeObjects: dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpClusterDatastoresList <a name="DataOciOcvpClusterDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterDatastoresList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.get"></a>

```typescript
public get(index: number): DataOciOcvpClusterDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpClusterDatastoresOutputReference <a name="DataOciOcvpClusterDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores">DataOciOcvpClusterDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.blockVolumeIds"></a>

```typescript
public readonly blockVolumeIds: string[];
```

- *Type:* string[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.datastoreType"></a>

```typescript
public readonly datastoreType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpClusterDatastores;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores">DataOciOcvpClusterDatastores</a>

---


### DataOciOcvpClusterNetworkConfigurationList <a name="DataOciOcvpClusterNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataOciOcvpClusterNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpClusterNetworkConfigurationOutputReference <a name="DataOciOcvpClusterNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration">DataOciOcvpClusterNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```typescript
public readonly hcxVlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```typescript
public readonly nsxEdgeUplink1VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```typescript
public readonly nsxEdgeUplink2VlanId: string;
```

- *Type:* string

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```typescript
public readonly nsxEdgeVtepVlanId: string;
```

- *Type:* string

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```typescript
public readonly nsxVtepVlanId: string;
```

- *Type:* string

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```typescript
public readonly provisioningSubnetId: string;
```

- *Type:* string

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```typescript
public readonly provisioningVlanId: string;
```

- *Type:* string

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```typescript
public readonly replicationVlanId: string;
```

- *Type:* string

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```typescript
public readonly vmotionVlanId: string;
```

- *Type:* string

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```typescript
public readonly vsanVlanId: string;
```

- *Type:* string

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```typescript
public readonly vsphereVlanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpClusterNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration">DataOciOcvpClusterNetworkConfiguration</a>

---


### DataOciOcvpClusterUpgradeLicensesList <a name="DataOciOcvpClusterUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.get"></a>

```typescript
public get(index: number): DataOciOcvpClusterUpgradeLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpClusterUpgradeLicensesOutputReference <a name="DataOciOcvpClusterUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseKey">licenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses">DataOciOcvpClusterUpgradeLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseKey"></a>

```typescript
public readonly licenseKey: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpClusterUpgradeLicenses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses">DataOciOcvpClusterUpgradeLicenses</a>

---


### DataOciOcvpClusterVsphereUpgradeObjectsList <a name="DataOciOcvpClusterVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.get"></a>

```typescript
public get(index: number): DataOciOcvpClusterVsphereUpgradeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpClusterVsphereUpgradeObjectsOutputReference <a name="DataOciOcvpClusterVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpCluster } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink">downloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription">linkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects">DataOciOcvpClusterVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downloadLink`<sup>Required</sup> <a name="downloadLink" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```typescript
public readonly downloadLink: string;
```

- *Type:* string

---

##### `linkDescription`<sup>Required</sup> <a name="linkDescription" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```typescript
public readonly linkDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpClusterVsphereUpgradeObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects">DataOciOcvpClusterVsphereUpgradeObjects</a>

---



