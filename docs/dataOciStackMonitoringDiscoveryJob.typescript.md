# `dataOciStackMonitoringDiscoveryJob` Submodule <a name="`dataOciStackMonitoringDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringDiscoveryJob <a name="DataOciStackMonitoringDiscoveryJob" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job oci_stack_monitoring_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob(scope: Construct, id: string, config: DataOciStackMonitoringDiscoveryJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig">DataOciStackMonitoringDiscoveryJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig">DataOciStackMonitoringDiscoveryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isConstruct"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformElement"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformDataSource"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringDiscoveryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryClient">discoveryClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryDetails">discoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryType">discoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources">shouldPropagateTagsToDiscoveredResources</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `discoveryClient`<sup>Required</sup> <a name="discoveryClient" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryClient"></a>

```typescript
public readonly discoveryClient: string;
```

- *Type:* string

---

##### `discoveryDetails`<sup>Required</sup> <a name="discoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryDetails"></a>

```typescript
public readonly discoveryDetails: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList</a>

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `shouldPropagateTagsToDiscoveredResources`<sup>Required</sup> <a name="shouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources"></a>

```typescript
public readonly shouldPropagateTagsToDiscoveredResources: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobIdInput"></a>

```typescript
public readonly discoveryJobIdInput: string;
```

- *Type:* string

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringDiscoveryJobConfig <a name="DataOciStackMonitoringDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobConfig: dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job#discovery_job_id DataOciStackMonitoringDiscoveryJob#discovery_job_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobConfig.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job#discovery_job_id DataOciStackMonitoringDiscoveryJob#discovery_job_id}.

---

### DataOciStackMonitoringDiscoveryJobDiscoveryDetails <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobDiscoveryDetails: dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails = { ... }
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials: dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials = { ... }
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems: dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems = { ... }
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties: dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties = { ... }
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties: dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties = { ... }
```


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags: dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap">propertiesMap</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertiesMap`<sup>Required</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap"></a>

```typescript
public readonly propertiesMap: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails">DataOciStackMonitoringDiscoveryJobDiscoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials"></a>

```typescript
public readonly credentials: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsCredentialsList</a>

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList</a>

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobDiscoveryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetails">DataOciStackMonitoringDiscoveryJobDiscoveryDetails</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap">propertiesMap</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertiesMap`<sup>Required</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap"></a>

```typescript
public readonly propertiesMap: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference <a name="DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap">propertiesMap</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertiesMap`<sup>Required</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap"></a>

```typescript
public readonly propertiesMap: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJob.DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags">DataOciStackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---



