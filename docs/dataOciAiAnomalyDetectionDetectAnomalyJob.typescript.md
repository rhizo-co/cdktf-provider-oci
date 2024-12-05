# `dataOciAiAnomalyDetectionDetectAnomalyJob` Submodule <a name="`dataOciAiAnomalyDetectionDetectAnomalyJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJob <a name="DataOciAiAnomalyDetectionDetectAnomalyJob" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob(scope: Construct, id: string, config: DataOciAiAnomalyDetectionDetectAnomalyJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig">DataOciAiAnomalyDetectionDetectAnomalyJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig">DataOciAiAnomalyDetectionDetectAnomalyJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isConstruct"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformElement"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformDataSource"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionDetectAnomalyJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionDetectAnomalyJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDetectAnomalyJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.inputDetails">inputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.outputDetails">outputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.sensitivity">sensitivity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobIdInput">detectAnomalyJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobId">detectAnomalyJobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputDetails`<sup>Required</sup> <a name="inputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.inputDetails"></a>

```typescript
public readonly inputDetails: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList</a>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `outputDetails`<sup>Required</sup> <a name="outputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.outputDetails"></a>

```typescript
public readonly outputDetails: DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.sensitivity"></a>

```typescript
public readonly sensitivity: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `detectAnomalyJobIdInput`<sup>Optional</sup> <a name="detectAnomalyJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobIdInput"></a>

```typescript
public readonly detectAnomalyJobIdInput: string;
```

- *Type:* string

---

##### `detectAnomalyJobId`<sup>Required</sup> <a name="detectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.detectAnomalyJobId"></a>

```typescript
public readonly detectAnomalyJobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobConfig <a name="DataOciAiAnomalyDetectionDetectAnomalyJobConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobConfig: dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.detectAnomalyJobId">detectAnomalyJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJob#detect_anomaly_job_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `detectAnomalyJobId`<sup>Required</sup> <a name="detectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobConfig.property.detectAnomalyJobId"></a>

```typescript
public readonly detectAnomalyJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_job#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJob#detect_anomaly_job_id}.

---

### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobInputDetails: dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData: dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations: dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails: dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data">data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType">inputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations">objectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames">signalNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data"></a>

```typescript
public readonly data: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a>

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType"></a>

```typescript
public readonly inputType: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `objectLocations`<sup>Required</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations"></a>

```typescript
public readonly objectLocations: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a>

---

##### `signalNames`<sup>Required</sup> <a name="signalNames" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames"></a>

```typescript
public readonly signalNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJob } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJob.DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---



