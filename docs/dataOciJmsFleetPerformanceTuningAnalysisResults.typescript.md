# `dataOciJmsFleetPerformanceTuningAnalysisResults` Submodule <a name="`dataOciJmsFleetPerformanceTuningAnalysisResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResults <a name="DataOciJmsFleetPerformanceTuningAnalysisResults" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results oci_jms_fleet_performance_tuning_analysis_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults(scope: Construct, id: string, config: DataOciJmsFleetPerformanceTuningAnalysisResultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig">DataOciJmsFleetPerformanceTuningAnalysisResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig">DataOciJmsFleetPerformanceTuningAnalysisResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetManagedInstanceId">resetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciJmsFleetPerformanceTuningAnalysisResultsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>[]

---

##### `resetApplicationId` <a name="resetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedInstanceId` <a name="resetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetManagedInstanceId"></a>

```typescript
public resetManagedInstanceId(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isConstruct"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformElement"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformDataSource"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetPerformanceTuningAnalysisResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetPerformanceTuningAnalysisResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetPerformanceTuningAnalysisResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList">DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.performanceTuningAnalysisResultCollection">performanceTuningAnalysisResultCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filter"></a>

```typescript
public readonly filter: DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList">DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList</a>

---

##### `performanceTuningAnalysisResultCollection`<sup>Required</sup> <a name="performanceTuningAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.performanceTuningAnalysisResultCollection"></a>

```typescript
public readonly performanceTuningAnalysisResultCollection: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciJmsFleetPerformanceTuningAnalysisResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>[]

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResultsConfig <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetPerformanceTuningAnalysisResultsConfig: dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#application_id DataOciJmsFleetPerformanceTuningAnalysisResults#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#host_name DataOciJmsFleetPerformanceTuningAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#id DataOciJmsFleetPerformanceTuningAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#managed_instance_id DataOciJmsFleetPerformanceTuningAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_end DataOciJmsFleetPerformanceTuningAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_start DataOciJmsFleetPerformanceTuningAnalysisResults#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResults#fleet_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#application_id DataOciJmsFleetPerformanceTuningAnalysisResults#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciJmsFleetPerformanceTuningAnalysisResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#filter DataOciJmsFleetPerformanceTuningAnalysisResults#filter}

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#host_name DataOciJmsFleetPerformanceTuningAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#id DataOciJmsFleetPerformanceTuningAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#managed_instance_id DataOciJmsFleetPerformanceTuningAnalysisResults#managed_instance_id}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_end DataOciJmsFleetPerformanceTuningAnalysisResults#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_start DataOciJmsFleetPerformanceTuningAnalysisResults#time_start}.

---

### DataOciJmsFleetPerformanceTuningAnalysisResultsFilter <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetPerformanceTuningAnalysisResultsFilter: dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#name DataOciJmsFleetPerformanceTuningAnalysisResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#values DataOciJmsFleetPerformanceTuningAnalysisResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#regex DataOciJmsFleetPerformanceTuningAnalysisResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#name DataOciJmsFleetPerformanceTuningAnalysisResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#values DataOciJmsFleetPerformanceTuningAnalysisResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#regex DataOciJmsFleetPerformanceTuningAnalysisResults#regex}.

---

### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection: dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection = { ... }
```


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems: dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsFleetPerformanceTuningAnalysisResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>[]

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsFleetPerformanceTuningAnalysisResultsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationId">applicationInstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationPath">applicationInstallationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.warningCount">warningCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `applicationInstallationId`<sup>Required</sup> <a name="applicationInstallationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationId"></a>

```typescript
public readonly applicationInstallationId: string;
```

- *Type:* string

---

##### `applicationInstallationPath`<sup>Required</sup> <a name="applicationInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationPath"></a>

```typescript
public readonly applicationInstallationPath: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `warningCount`<sup>Required</sup> <a name="warningCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.warningCount"></a>

```typescript
public readonly warningCount: number;
```

- *Type:* number

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems</a>

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetPerformanceTuningAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection</a>

---



