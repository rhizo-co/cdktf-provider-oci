# `dataOciMonitoringMetricData` Submodule <a name="`dataOciMonitoringMetricData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringMetricData <a name="DataOciMonitoringMetricData" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data oci_monitoring_metric_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

new dataOciMonitoringMetricData.DataOciMonitoringMetricData(scope: Construct, id: string, config: DataOciMonitoringMetricDataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig">DataOciMonitoringMetricDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig">DataOciMonitoringMetricDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResolution">resetResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMonitoringMetricDataFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>[]

---

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetEndTime` <a name="resetEndTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResolution` <a name="resetResolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResolution"></a>

```typescript
public resetResolution(): void
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetStartTime` <a name="resetStartTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringMetricData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isConstruct"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

dataOciMonitoringMetricData.DataOciMonitoringMetricData.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformElement"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformDataSource"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMonitoringMetricData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMonitoringMetricData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMonitoringMetricData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringMetricData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList">DataOciMonitoringMetricDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.metricData">metricData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList">DataOciMonitoringMetricDataMetricDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolutionInput">resolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroupInput">resourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolution">resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filter"></a>

```typescript
public readonly filter: DataOciMonitoringMetricDataFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList">DataOciMonitoringMetricDataFilterList</a>

---

##### `metricData`<sup>Required</sup> <a name="metricData" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.metricData"></a>

```typescript
public readonly metricData: DataOciMonitoringMetricDataMetricDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList">DataOciMonitoringMetricDataMetricDataList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMonitoringMetricDataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `resolutionInput`<sup>Optional</sup> <a name="resolutionInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolutionInput"></a>

```typescript
public readonly resolutionInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringMetricDataConfig <a name="DataOciMonitoringMetricDataConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

const dataOciMonitoringMetricDataConfig: dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id DataOciMonitoringMetricData#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#namespace DataOciMonitoringMetricData#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#query DataOciMonitoringMetricData#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id_in_subtree DataOciMonitoringMetricData#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#end_time DataOciMonitoringMetricData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#id DataOciMonitoringMetricData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resolution">resolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resolution DataOciMonitoringMetricData#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resource_group DataOciMonitoringMetricData#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#start_time DataOciMonitoringMetricData#start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id DataOciMonitoringMetricData#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#namespace DataOciMonitoringMetricData#namespace}.

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#query DataOciMonitoringMetricData#query}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id_in_subtree DataOciMonitoringMetricData#compartment_id_in_subtree}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#end_time DataOciMonitoringMetricData#end_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMonitoringMetricDataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#filter DataOciMonitoringMetricData#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#id DataOciMonitoringMetricData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resolution`<sup>Optional</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resolution DataOciMonitoringMetricData#resolution}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resource_group DataOciMonitoringMetricData#resource_group}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#start_time DataOciMonitoringMetricData#start_time}.

---

### DataOciMonitoringMetricDataFilter <a name="DataOciMonitoringMetricDataFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

const dataOciMonitoringMetricDataFilter: dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#name DataOciMonitoringMetricData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#values DataOciMonitoringMetricData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#regex DataOciMonitoringMetricData#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#name DataOciMonitoringMetricData#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#values DataOciMonitoringMetricData#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#regex DataOciMonitoringMetricData#regex}.

---

### DataOciMonitoringMetricDataMetricData <a name="DataOciMonitoringMetricDataMetricData" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

const dataOciMonitoringMetricDataMetricData: dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData = { ... }
```


### DataOciMonitoringMetricDataMetricDataAggregatedDatapoints <a name="DataOciMonitoringMetricDataMetricDataAggregatedDatapoints" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

const dataOciMonitoringMetricDataMetricDataAggregatedDatapoints: dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringMetricDataFilterList <a name="DataOciMonitoringMetricDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

new dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.get"></a>

```typescript
public get(index: number): DataOciMonitoringMetricDataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMonitoringMetricDataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>[]

---


### DataOciMonitoringMetricDataFilterOutputReference <a name="DataOciMonitoringMetricDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

new dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMonitoringMetricDataFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter">DataOciMonitoringMetricDataFilter</a>

---


### DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList <a name="DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

new dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.get"></a>

```typescript
public get(index: number): DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference <a name="DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

new dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints">DataOciMonitoringMetricDataMetricDataAggregatedDatapoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMonitoringMetricDataMetricDataAggregatedDatapoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints">DataOciMonitoringMetricDataMetricDataAggregatedDatapoints</a>

---


### DataOciMonitoringMetricDataMetricDataList <a name="DataOciMonitoringMetricDataMetricDataList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

new dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.get"></a>

```typescript
public get(index: number): DataOciMonitoringMetricDataMetricDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMonitoringMetricDataMetricDataOutputReference <a name="DataOciMonitoringMetricDataMetricDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer"></a>

```typescript
import { dataOciMonitoringMetricData } from 'rhizo-co-terraform-provider-oci'

new dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.aggregatedDatapoints">aggregatedDatapoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList">DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.dimensions">dimensions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resolution">resolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData">DataOciMonitoringMetricDataMetricData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatedDatapoints`<sup>Required</sup> <a name="aggregatedDatapoints" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.aggregatedDatapoints"></a>

```typescript
public readonly aggregatedDatapoints: DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList">DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `resolution`<sup>Required</sup> <a name="resolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resolution"></a>

```typescript
public readonly resolution: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMonitoringMetricDataMetricData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData">DataOciMonitoringMetricDataMetricData</a>

---



