# `dataOciJmsFleetCryptoAnalysisResults` Submodule <a name="`dataOciJmsFleetCryptoAnalysisResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetCryptoAnalysisResults <a name="DataOciJmsFleetCryptoAnalysisResults" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results oci_jms_fleet_crypto_analysis_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults(scope: Construct, id: string, config: DataOciJmsFleetCryptoAnalysisResultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig">DataOciJmsFleetCryptoAnalysisResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig">DataOciJmsFleetCryptoAnalysisResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetAggregationMode">resetAggregationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCount">resetFindingCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCountGreaterThan">resetFindingCountGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetManagedInstanceId">resetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCount">resetNonCompliantFindingCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCountGreaterThan">resetNonCompliantFindingCountGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciJmsFleetCryptoAnalysisResultsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>[]

---

##### `resetAggregationMode` <a name="resetAggregationMode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetAggregationMode"></a>

```typescript
public resetAggregationMode(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFindingCount` <a name="resetFindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCount"></a>

```typescript
public resetFindingCount(): void
```

##### `resetFindingCountGreaterThan` <a name="resetFindingCountGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCountGreaterThan"></a>

```typescript
public resetFindingCountGreaterThan(): void
```

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedInstanceId` <a name="resetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetManagedInstanceId"></a>

```typescript
public resetManagedInstanceId(): void
```

##### `resetNonCompliantFindingCount` <a name="resetNonCompliantFindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCount"></a>

```typescript
public resetNonCompliantFindingCount(): void
```

##### `resetNonCompliantFindingCountGreaterThan` <a name="resetNonCompliantFindingCountGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCountGreaterThan"></a>

```typescript
public resetNonCompliantFindingCountGreaterThan(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isConstruct"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformElement"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformDataSource"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetCryptoAnalysisResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetCryptoAnalysisResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetCryptoAnalysisResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cryptoAnalysisResultCollection">cryptoAnalysisResultCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList">DataOciJmsFleetCryptoAnalysisResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationModeInput">aggregationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThanInput">findingCountGreaterThanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountInput">findingCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThanInput">nonCompliantFindingCountGreaterThanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountInput">nonCompliantFindingCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationMode">aggregationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCount">findingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThan">findingCountGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCount">nonCompliantFindingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThan">nonCompliantFindingCountGreaterThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cryptoAnalysisResultCollection`<sup>Required</sup> <a name="cryptoAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cryptoAnalysisResultCollection"></a>

```typescript
public readonly cryptoAnalysisResultCollection: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filter"></a>

```typescript
public readonly filter: DataOciJmsFleetCryptoAnalysisResultsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList">DataOciJmsFleetCryptoAnalysisResultsFilterList</a>

---

##### `aggregationModeInput`<sup>Optional</sup> <a name="aggregationModeInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationModeInput"></a>

```typescript
public readonly aggregationModeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciJmsFleetCryptoAnalysisResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>[]

---

##### `findingCountGreaterThanInput`<sup>Optional</sup> <a name="findingCountGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThanInput"></a>

```typescript
public readonly findingCountGreaterThanInput: number;
```

- *Type:* number

---

##### `findingCountInput`<sup>Optional</sup> <a name="findingCountInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountInput"></a>

```typescript
public readonly findingCountInput: number;
```

- *Type:* number

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `nonCompliantFindingCountGreaterThanInput`<sup>Optional</sup> <a name="nonCompliantFindingCountGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThanInput"></a>

```typescript
public readonly nonCompliantFindingCountGreaterThanInput: number;
```

- *Type:* number

---

##### `nonCompliantFindingCountInput`<sup>Optional</sup> <a name="nonCompliantFindingCountInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountInput"></a>

```typescript
public readonly nonCompliantFindingCountInput: number;
```

- *Type:* number

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `aggregationMode`<sup>Required</sup> <a name="aggregationMode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationMode"></a>

```typescript
public readonly aggregationMode: string;
```

- *Type:* string

---

##### `findingCount`<sup>Required</sup> <a name="findingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCount"></a>

```typescript
public readonly findingCount: number;
```

- *Type:* number

---

##### `findingCountGreaterThan`<sup>Required</sup> <a name="findingCountGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThan"></a>

```typescript
public readonly findingCountGreaterThan: number;
```

- *Type:* number

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `nonCompliantFindingCount`<sup>Required</sup> <a name="nonCompliantFindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCount"></a>

```typescript
public readonly nonCompliantFindingCount: number;
```

- *Type:* number

---

##### `nonCompliantFindingCountGreaterThan`<sup>Required</sup> <a name="nonCompliantFindingCountGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThan"></a>

```typescript
public readonly nonCompliantFindingCountGreaterThan: number;
```

- *Type:* number

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetCryptoAnalysisResultsConfig <a name="DataOciJmsFleetCryptoAnalysisResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetCryptoAnalysisResultsConfig: dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#fleet_id DataOciJmsFleetCryptoAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.aggregationMode">aggregationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#aggregation_mode DataOciJmsFleetCryptoAnalysisResults#aggregation_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCount">findingCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count DataOciJmsFleetCryptoAnalysisResults#finding_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCountGreaterThan">findingCountGreaterThan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#finding_count_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#host_name DataOciJmsFleetCryptoAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#id DataOciJmsFleetCryptoAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#managed_instance_id DataOciJmsFleetCryptoAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCount">nonCompliantFindingCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCountGreaterThan">nonCompliantFindingCountGreaterThan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_end DataOciJmsFleetCryptoAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_start DataOciJmsFleetCryptoAnalysisResults#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#fleet_id DataOciJmsFleetCryptoAnalysisResults#fleet_id}.

---

##### `aggregationMode`<sup>Optional</sup> <a name="aggregationMode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.aggregationMode"></a>

```typescript
public readonly aggregationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#aggregation_mode DataOciJmsFleetCryptoAnalysisResults#aggregation_mode}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciJmsFleetCryptoAnalysisResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#filter DataOciJmsFleetCryptoAnalysisResults#filter}

---

##### `findingCount`<sup>Optional</sup> <a name="findingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCount"></a>

```typescript
public readonly findingCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count DataOciJmsFleetCryptoAnalysisResults#finding_count}.

---

##### `findingCountGreaterThan`<sup>Optional</sup> <a name="findingCountGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCountGreaterThan"></a>

```typescript
public readonly findingCountGreaterThan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#finding_count_greater_than}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#host_name DataOciJmsFleetCryptoAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#id DataOciJmsFleetCryptoAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#managed_instance_id DataOciJmsFleetCryptoAnalysisResults#managed_instance_id}.

---

##### `nonCompliantFindingCount`<sup>Optional</sup> <a name="nonCompliantFindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCount"></a>

```typescript
public readonly nonCompliantFindingCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count}.

---

##### `nonCompliantFindingCountGreaterThan`<sup>Optional</sup> <a name="nonCompliantFindingCountGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCountGreaterThan"></a>

```typescript
public readonly nonCompliantFindingCountGreaterThan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count_greater_than}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_end DataOciJmsFleetCryptoAnalysisResults#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_start DataOciJmsFleetCryptoAnalysisResults#time_start}.

---

### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection: dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection = { ... }
```


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems: dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems = { ... }
```


### DataOciJmsFleetCryptoAnalysisResultsFilter <a name="DataOciJmsFleetCryptoAnalysisResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetCryptoAnalysisResultsFilter: dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#name DataOciJmsFleetCryptoAnalysisResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#values DataOciJmsFleetCryptoAnalysisResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#regex DataOciJmsFleetCryptoAnalysisResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#name DataOciJmsFleetCryptoAnalysisResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#values DataOciJmsFleetCryptoAnalysisResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#regex DataOciJmsFleetCryptoAnalysisResults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.aggregationMode">aggregationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.cryptoRoadmapVersion">cryptoRoadmapVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.findingCount">findingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.nonCompliantFindingCount">nonCompliantFindingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.summarizedEventCount">summarizedEventCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFirstEvent">timeFirstEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeLastEvent">timeLastEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.totalEventCount">totalEventCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationMode`<sup>Required</sup> <a name="aggregationMode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.aggregationMode"></a>

```typescript
public readonly aggregationMode: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cryptoRoadmapVersion`<sup>Required</sup> <a name="cryptoRoadmapVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.cryptoRoadmapVersion"></a>

```typescript
public readonly cryptoRoadmapVersion: string;
```

- *Type:* string

---

##### `findingCount`<sup>Required</sup> <a name="findingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.findingCount"></a>

```typescript
public readonly findingCount: number;
```

- *Type:* number

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nonCompliantFindingCount`<sup>Required</sup> <a name="nonCompliantFindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.nonCompliantFindingCount"></a>

```typescript
public readonly nonCompliantFindingCount: number;
```

- *Type:* number

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `summarizedEventCount`<sup>Required</sup> <a name="summarizedEventCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.summarizedEventCount"></a>

```typescript
public readonly summarizedEventCount: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeFirstEvent`<sup>Required</sup> <a name="timeFirstEvent" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFirstEvent"></a>

```typescript
public readonly timeFirstEvent: string;
```

- *Type:* string

---

##### `timeLastEvent`<sup>Required</sup> <a name="timeLastEvent" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeLastEvent"></a>

```typescript
public readonly timeLastEvent: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `totalEventCount`<sup>Required</sup> <a name="totalEventCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.totalEventCount"></a>

```typescript
public readonly totalEventCount: number;
```

- *Type:* number

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems</a>

---


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection</a>

---


### DataOciJmsFleetCryptoAnalysisResultsFilterList <a name="DataOciJmsFleetCryptoAnalysisResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsFleetCryptoAnalysisResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>[]

---


### DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference <a name="DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResults } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsFleetCryptoAnalysisResultsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>

---



