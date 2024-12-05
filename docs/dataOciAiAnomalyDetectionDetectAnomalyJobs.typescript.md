# `dataOciAiAnomalyDetectionDetectAnomalyJobs` Submodule <a name="`dataOciAiAnomalyDetectionDetectAnomalyJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobs <a name="DataOciAiAnomalyDetectionDetectAnomalyJobs" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs oci_ai_anomaly_detection_detect_anomaly_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs(scope: Construct, id: string, config: DataOciAiAnomalyDetectionDetectAnomalyJobsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig">DataOciAiAnomalyDetectionDetectAnomalyJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig">DataOciAiAnomalyDetectionDetectAnomalyJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDetectAnomalyJobId">resetDetectAnomalyJobId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAiAnomalyDetectionDetectAnomalyJobsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>[]

---

##### `resetDetectAnomalyJobId` <a name="resetDetectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDetectAnomalyJobId"></a>

```typescript
public resetDetectAnomalyJobId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetModelId` <a name="resetModelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetModelId"></a>

```typescript
public resetModelId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJobs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionDetectAnomalyJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionDetectAnomalyJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDetectAnomalyJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobCollection">detectAnomalyJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList">DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobIdInput">detectAnomalyJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobId">detectAnomalyJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `detectAnomalyJobCollection`<sup>Required</sup> <a name="detectAnomalyJobCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobCollection"></a>

```typescript
public readonly detectAnomalyJobCollection: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filter"></a>

```typescript
public readonly filter: DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList">DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `detectAnomalyJobIdInput`<sup>Optional</sup> <a name="detectAnomalyJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobIdInput"></a>

```typescript
public readonly detectAnomalyJobIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAiAnomalyDetectionDetectAnomalyJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `detectAnomalyJobId`<sup>Required</sup> <a name="detectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobId"></a>

```typescript
public readonly detectAnomalyJobId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobsConfig <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsConfig: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.detectAnomalyJobId">detectAnomalyJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}.

---

##### `detectAnomalyJobId`<sup>Optional</sup> <a name="detectAnomalyJobId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.detectAnomalyJobId"></a>

```typescript
public readonly detectAnomalyJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAiAnomalyDetectionDetectAnomalyJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#filter DataOciAiAnomalyDetectionDetectAnomalyJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}.

---

### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails = { ... }
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilter <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionDetectAnomalyJobsFilter: dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#name DataOciAiAnomalyDetectionDetectAnomalyJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#values DataOciAiAnomalyDetectionDetectAnomalyJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#regex DataOciAiAnomalyDetectionDetectAnomalyJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#name DataOciAiAnomalyDetectionDetectAnomalyJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#values DataOciAiAnomalyDetectionDetectAnomalyJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#regex DataOciAiAnomalyDetectionDetectAnomalyJobs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.data">data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.inputType">inputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.objectLocations">objectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.signalNames">signalNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.data"></a>

```typescript
public readonly data: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList</a>

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.inputType"></a>

```typescript
public readonly inputType: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `objectLocations`<sup>Required</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.objectLocations"></a>

```typescript
public readonly objectLocations: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList</a>

---

##### `signalNames`<sup>Required</sup> <a name="signalNames" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.signalNames"></a>

```typescript
public readonly signalNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.inputDetails">inputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.outputDetails">outputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.sensitivity">sensitivity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputDetails`<sup>Required</sup> <a name="inputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.inputDetails"></a>

```typescript
public readonly inputDetails: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList</a>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `outputDetails`<sup>Required</sup> <a name="outputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.outputDetails"></a>

```typescript
public readonly outputDetails: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.sensitivity"></a>

```typescript
public readonly sensitivity: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiAnomalyDetectionDetectAnomalyJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>[]

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionDetectAnomalyJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiAnomalyDetectionDetectAnomalyJobsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>

---



