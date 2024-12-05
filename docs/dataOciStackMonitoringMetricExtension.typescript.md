# `dataOciStackMonitoringMetricExtension` Submodule <a name="`dataOciStackMonitoringMetricExtension` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMetricExtension <a name="DataOciStackMonitoringMetricExtension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension(scope: Construct, id: string, config: DataOciStackMonitoringMetricExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig">DataOciStackMonitoringMetricExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig">DataOciStackMonitoringMetricExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciStackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringMetricExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringMetricExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMetricExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionMethod">collectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionRecurrences">collectionRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResources">enabledOnResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResourcesCount">enabledOnResourcesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricList">metricList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList">DataOciStackMonitoringMetricExtensionMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.publishTrigger">publishTrigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList">DataOciStackMonitoringMetricExtensionQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionIdInput">metricExtensionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionId">metricExtensionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionMethod"></a>

```typescript
public readonly collectionMethod: string;
```

- *Type:* string

---

##### `collectionRecurrences`<sup>Required</sup> <a name="collectionRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionRecurrences"></a>

```typescript
public readonly collectionRecurrences: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabledOnResources`<sup>Required</sup> <a name="enabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResources"></a>

```typescript
public readonly enabledOnResources: DataOciStackMonitoringMetricExtensionEnabledOnResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionEnabledOnResourcesList</a>

---

##### `enabledOnResourcesCount`<sup>Required</sup> <a name="enabledOnResourcesCount" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResourcesCount"></a>

```typescript
public readonly enabledOnResourcesCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricList"></a>

```typescript
public readonly metricList: DataOciStackMonitoringMetricExtensionMetricListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList">DataOciStackMonitoringMetricExtensionMetricListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publishTrigger`<sup>Required</sup> <a name="publishTrigger" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.publishTrigger"></a>

```typescript
public readonly publishTrigger: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.queryProperties"></a>

```typescript
public readonly queryProperties: DataOciStackMonitoringMetricExtensionQueryPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList">DataOciStackMonitoringMetricExtensionQueryPropertiesList</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `metricExtensionIdInput`<sup>Optional</sup> <a name="metricExtensionIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionIdInput"></a>

```typescript
public readonly metricExtensionIdInput: string;
```

- *Type:* string

---

##### `metricExtensionId`<sup>Required</sup> <a name="metricExtensionId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionId"></a>

```typescript
public readonly metricExtensionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMetricExtensionConfig <a name="DataOciStackMonitoringMetricExtensionConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionConfig: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.metricExtensionId">metricExtensionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metricExtensionId`<sup>Required</sup> <a name="metricExtensionId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.metricExtensionId"></a>

```typescript
public readonly metricExtensionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}.

---

### DataOciStackMonitoringMetricExtensionEnabledOnResources <a name="DataOciStackMonitoringMetricExtensionEnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionEnabledOnResources: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources = { ... }
```


### DataOciStackMonitoringMetricExtensionMetricListStruct <a name="DataOciStackMonitoringMetricExtensionMetricListStruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionMetricListStruct: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct = { ... }
```


### DataOciStackMonitoringMetricExtensionQueryProperties <a name="DataOciStackMonitoringMetricExtensionQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionQueryProperties: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties = { ... }
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails = { ... }
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails = { ... }
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails = { ... }
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails: dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMetricExtensionEnabledOnResourcesList <a name="DataOciStackMonitoringMetricExtensionEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference <a name="DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources">DataOciStackMonitoringMetricExtensionEnabledOnResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionEnabledOnResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources">DataOciStackMonitoringMetricExtensionEnabledOnResources</a>

---


### DataOciStackMonitoringMetricExtensionMetricListStructList <a name="DataOciStackMonitoringMetricExtensionMetricListStructList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionMetricListStructOutputReference <a name="DataOciStackMonitoringMetricExtensionMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression">computeExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension">isDimension</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden">isHidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory">metricCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct">DataOciStackMonitoringMetricExtensionMetricListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeExpression`<sup>Required</sup> <a name="computeExpression" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression"></a>

```typescript
public readonly computeExpression: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isDimension`<sup>Required</sup> <a name="isDimension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension"></a>

```typescript
public readonly isDimension: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden"></a>

```typescript
public readonly isHidden: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metricCategory`<sup>Required</sup> <a name="metricCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory"></a>

```typescript
public readonly metricCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionMetricListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct">DataOciStackMonitoringMetricExtensionMetricListStruct</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">inParamPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue">inParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inParamPosition`<sup>Required</sup> <a name="inParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```typescript
public readonly inParamPosition: number;
```

- *Type:* number

---

##### `inParamValue`<sup>Required</sup> <a name="inParamValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```typescript
public readonly inParamValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">outParamPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType">outParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outParamPosition`<sup>Required</sup> <a name="outParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```typescript
public readonly outParamPosition: number;
```

- *Type:* number

---

##### `outParamType`<sup>Required</sup> <a name="outParamType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```typescript
public readonly outParamType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments">arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix">autoRowPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod">collectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric">identityMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails">inParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled">isMetricServiceEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes">jmxAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery">managedBeanQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails">outParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails">scriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails">sqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType">sqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties">DataOciStackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

---

##### `autoRowPrefix`<sup>Required</sup> <a name="autoRowPrefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```typescript
public readonly autoRowPrefix: string;
```

- *Type:* string

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod"></a>

```typescript
public readonly collectionMethod: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `identityMetric`<sup>Required</sup> <a name="identityMetric" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric"></a>

```typescript
public readonly identityMetric: string;
```

- *Type:* string

---

##### `inParamDetails`<sup>Required</sup> <a name="inParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails"></a>

```typescript
public readonly inParamDetails: DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a>

---

##### `isMetricServiceEnabled`<sup>Required</sup> <a name="isMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```typescript
public readonly isMetricServiceEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `jmxAttributes`<sup>Required</sup> <a name="jmxAttributes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes"></a>

```typescript
public readonly jmxAttributes: string;
```

- *Type:* string

---

##### `managedBeanQuery`<sup>Required</sup> <a name="managedBeanQuery" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```typescript
public readonly managedBeanQuery: string;
```

- *Type:* string

---

##### `outParamDetails`<sup>Required</sup> <a name="outParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails"></a>

```typescript
public readonly outParamDetails: DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList</a>

---

##### `scriptDetails`<sup>Required</sup> <a name="scriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails"></a>

```typescript
public readonly scriptDetails: DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList</a>

---

##### `sqlDetails`<sup>Required</sup> <a name="sqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails"></a>

```typescript
public readonly sqlDetails: DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList</a>

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties">DataOciStackMonitoringMetricExtensionQueryProperties</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtension } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">scriptFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `scriptFileName`<sup>Required</sup> <a name="scriptFileName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```typescript
public readonly scriptFileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---



